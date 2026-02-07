'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useScrollLock } from '@/hooks/useScrollLock';

interface MobileModalManagerProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Called when the modal should be closed */
  onClose: () => void;
  /** Modal content */
  children: React.ReactNode;
  /** Custom backdrop className */
  backdropClassName?: string;
  /** Custom modal className */
  modalClassName?: string;
  /** Enable swipe-to-close gesture (default: true) */
  enableSwipeClose?: boolean;
  /** Swipe close threshold in pixels (default: 150) */
  swipeThreshold?: number;
  /** Disable click-outside-to-close (default: false) */
  disableBackdropClose?: boolean;
  /** Custom z-index (default: 50) */
  zIndex?: number;
  /** Unique id for accessibility */
  id?: string;
  /** ARIA label for the modal */
  ariaLabel?: string;
  /** ARIA described by */
  ariaDescribedBy?: string;
}

/**
 * Mobile-optimized modal manager component that handles:
 * - Touch gestures (swipe to close)
 * - Proper scroll locking
 * - Focus management
 * - Accessibility
 * - Portal rendering
 * - Backdrop handling
 */
export const MobileModalManager: React.FC<MobileModalManagerProps> = ({
  isOpen,
  onClose,
  children,
  backdropClassName = '',
  modalClassName = '',
  enableSwipeClose = true,
  swipeThreshold = 150,
  disableBackdropClose = false,
  zIndex = 50,
  id = 'mobile-modal',
  ariaLabel,
  ariaDescribedBy,
}) => {
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  
  const { lock: lockScroll, unlock: unlockScroll } = useScrollLock({
    preventTouch: true,
    preserveScrollPosition: true,
    allowScrollTarget: modalRef.current,
  });

  // Handle mount state for portal rendering
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle scroll locking and focus management
  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      // Store the currently focused element
      lastFocusedElementRef.current = document.activeElement as HTMLElement;
      
      // Lock scroll
      lockScroll();
      
      // Focus the modal after animation
      setTimeout(() => {
        if (modalRef.current) {
          const firstFocusable = modalRef.current.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          ) as HTMLElement;
          
          if (firstFocusable) {
            firstFocusable.focus();
          } else {
            modalRef.current.focus();
          }
        }
      }, 150);
    } else {
      // Unlock scroll
      unlockScroll();
      
      // Restore focus to the previously focused element
      if (lastFocusedElementRef.current) {
        setTimeout(() => {
          lastFocusedElementRef.current?.focus();
        }, 150);
      }
    }

    return () => {
      unlockScroll();
    };
  }, [isOpen, mounted, lockScroll, unlockScroll]);

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Trap focus within modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstFocusable = focusableElements[0] as HTMLElement;
        const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (disableBackdropClose || isDragging) return;
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [disableBackdropClose, isDragging, onClose]);

  // Handle swipe gestures
  const handlePanStart = useCallback(() => {
    if (enableSwipeClose) {
      setIsDragging(true);
    }
  }, [enableSwipeClose]);

  const handlePanEnd = useCallback((_event: unknown, info: PanInfo) => {
    setIsDragging(false);
    
    if (!enableSwipeClose) return;
    
    // Check if swipe distance and velocity meet threshold
    const isSwipeDown = info.offset.y > swipeThreshold || info.velocity.y > 500;
    
    // Close on significant downward swipe
    if (isSwipeDown) {
      onClose();
    }
  }, [enableSwipeClose, swipeThreshold, onClose]);

  // Modal animations
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      y: 50 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  if (!mounted) {
    return null;
  }

  const modalContent = (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center p-4 ${backdropClassName}`}
          style={{ zIndex }}
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            className={`relative w-full max-w-6xl mx-auto bg-slate-900 rounded-xl shadow-2xl border border-slate-800 ${modalClassName}`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            drag={enableSwipeClose ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onPanStart={handlePanStart}
            onPanEnd={handlePanEnd}
            role="dialog"
            aria-modal="true"
            aria-labelledby={ariaLabel ? `${id}-title` : undefined}
            aria-describedby={ariaDescribedBy ? `${id}-description` : undefined}
            tabIndex={-1}
            data-scrollable="true"
          >
            {/* Mobile swipe indicator */}
            {enableSwipeClose && (
              <div className="flex justify-center pt-2 pb-1 md:hidden">
                <div className="w-8 h-1 bg-slate-600 rounded-full" />
              </div>
            )}
            
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default MobileModalManager;
