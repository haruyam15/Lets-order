import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number | string): string {
  const num = typeof value === 'string' ? Number(value) : value;
  if (isNaN(num)) return '0원';
  return num.toLocaleString('ko-KR') + '원';
}
