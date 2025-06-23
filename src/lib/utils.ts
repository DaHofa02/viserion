import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const titleCase = (s: string) => s.replace(/\b([\w])/g, m => m === '-' ? ' ' : m.toUpperCase());