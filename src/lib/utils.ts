import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function extractYouTubeId(url: string): string {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}

export function formatDuration(duration: string): string {
  const parts = duration.split(':');
  if (parts.length === 2) {
    return `${parseInt(parts[0])}:${parts[1].padStart(2, '0')}`;
  }
  return duration;
}

export function formatViews(views: string | number): string {
  if (typeof views === 'number') {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(0)}K`;
    }
    return views.toString();
  }
  return views;
}

export function smoothScrollTo(element: string) {
  const target = document.querySelector(element);
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
