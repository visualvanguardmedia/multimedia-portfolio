'use client';

import { useEffect, useRef, useCallback } from 'react';

interface ScrollLockOptions {
  /** Enable touch event handling to prevent iOS rubber banding */
  preventTouch?: boolean;
  /** Preserve the scroll position when locking/unlocking */
  preserveScrollPosition?: boolean;
  /** Allow scrolling within specific elements (useful for modal content) */
  allowScrollTarget?: HTMLElement | null;
}

interface ScrollLockReturn {
  /** Lock the body scroll */
  lock: () => void;
  /** Unlock the body scroll */
  unlock: () => void;
  /** Current lock state */
  isLocked: boolean;
}

/**
 * Custom hook for managing scroll lock with mobile-specific optimizations.
 * 
 * Features:
 * - Prevents page scroll while preserving modal/overlay content scrolling
 * - Handles iOS rubber band scrolling issues
 * - Preserves scroll position across lock/unlock cycles
 * - Optimized for mobile touch interactions
 * - Handles edge cases for different mobile browsers
 */
export function useScrollLock(options: ScrollLockOptions = {}): ScrollLockReturn {
  const {
    preventTouch = true,
    preserveScrollPosition = true,
    allowScrollTarget = null,
  } = options;

  const isLockedRef = useRef(false);
  const scrollPositionRef = useRef({ x: 0, y: 0 });
  const originalStylesRef = useRef<{
    overflow: string;
    position: string;
    top: string;
    width: string;
    paddingRight: string;
  } | null>(null);

  // Get scrollbar width to prevent layout shift
  const getScrollbarWidth = useCallback(() => {
    if (typeof window === 'undefined') return 0;
    return window.innerWidth - document.documentElement.clientWidth;
  }, []);

  // Handle touch events to prevent iOS rubber banding
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!preventTouch) return;

    const target = e.target as HTMLElement;
    
    // Allow scrolling within the specified scroll target
    if (allowScrollTarget && allowScrollTarget.contains(target)) {
      // Check if the scroll target can actually scroll
      const scrollableParent = target.closest('[data-scrollable="true"]') || allowScrollTarget;
      if (scrollableParent) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableParent;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight;
        
        // Get the touch direction
        const touch = e.touches[0];
        const prevTouch = e.changedTouches[0];
        if (touch && prevTouch) {
          const deltaY = touch.clientY - prevTouch.clientY;
          
          // Prevent scroll if at boundaries and trying to scroll beyond
          if ((isAtTop && deltaY > 0) || (isAtBottom && deltaY < 0)) {
            e.preventDefault();
          }
        }
        return;
      }
    }

    // Prevent all other touch scrolling
    e.preventDefault();
  }, [preventTouch, allowScrollTarget]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!preventTouch) return;
    
    const target = e.target as HTMLElement;
    
    // Allow touches within the scroll target
    if (allowScrollTarget && allowScrollTarget.contains(target)) {
      return;
    }

    // Store initial touch for move calculations
    e.preventDefault();
  }, [preventTouch, allowScrollTarget]);

  const lock = useCallback(() => {
    if (typeof window === 'undefined' || isLockedRef.current) return;

    const body = document.body;
    const scrollbarWidth = getScrollbarWidth();

    // Store current scroll position
    if (preserveScrollPosition) {
      scrollPositionRef.current = {
        x: window.scrollX || window.pageXOffset,
        y: window.scrollY || window.pageYOffset,
      };
    }

    // Store original styles
    originalStylesRef.current = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    };

    // Apply scroll lock styles
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${scrollbarWidth}px`;
    
    // For iOS and mobile browsers: use fixed positioning to prevent rubber banding
    if (preserveScrollPosition && /iPad|iPhone|iPod|Android/i.test(navigator.userAgent)) {
      body.style.position = 'fixed';
      body.style.top = `-${scrollPositionRef.current.y}px`;
      body.style.width = '100%';
    }

    // Add touch event listeners for mobile
    if (preventTouch) {
      document.addEventListener('touchstart', handleTouchStart, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    isLockedRef.current = true;
  }, [getScrollbarWidth, preserveScrollPosition, preventTouch, handleTouchStart, handleTouchMove]);

  const unlock = useCallback(() => {
    if (typeof window === 'undefined' || !isLockedRef.current) return;

    const body = document.body;

    // Remove touch event listeners
    if (preventTouch) {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    }

    // Restore original styles
    if (originalStylesRef.current) {
      const originalStyles = originalStylesRef.current;
      body.style.overflow = originalStyles.overflow;
      body.style.position = originalStyles.position;
      body.style.top = originalStyles.top;
      body.style.width = originalStyles.width;
      body.style.paddingRight = originalStyles.paddingRight;
    }

    // Restore scroll position
    if (preserveScrollPosition && scrollPositionRef.current) {
      // Use requestAnimationFrame to ensure DOM is updated before scrolling
      requestAnimationFrame(() => {
        window.scrollTo(scrollPositionRef.current.x, scrollPositionRef.current.y);
      });
    }

    isLockedRef.current = false;
    originalStylesRef.current = null;
  }, [preventTouch, preserveScrollPosition, handleTouchStart, handleTouchMove]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isLockedRef.current) {
        unlock();
      }
    };
  }, [unlock]);

  return {
    lock,
    unlock,
    isLocked: isLockedRef.current,
  };
}
