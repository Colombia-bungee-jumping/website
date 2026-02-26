import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");

  const normalized = digits.startsWith("+") ? digits : `+${digits}`;

  const justNumbers = normalized.slice(1);

  if (justNumbers.length < 12) {
    return normalized;
  }

  const country = justNumbers.slice(0, 2);
  const part1 = justNumbers.slice(2, 5);
  const part2 = justNumbers.slice(5, 8);
  const part3 = justNumbers.slice(8, 12);

  return `+${country} ${part1} ${part2} ${part3}`;
}
