/**
 * Data formatting utility functions
 */

/**
 * Formats a date string to readable format
 * @param dateString - ISO date string
 * @param options - Intl.DateTimeFormat options
 */
export const formatDate = (
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

/**
 * Formats a date to relative time (e.g., "2 days ago")
 * @param dateString - ISO date string
 */
export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
};

/**
 * Formats a number with custom options
 * @param num - Number to format
 * @param options - Intl.NumberFormat options
 */
export const formatNumber = (
  num: number,
  options: Intl.NumberFormatOptions = {}
): string => {
  return new Intl.NumberFormat("en-US", options).format(num);
};

/**
 * Formats currency
 * @param amount - Amount to format
 * @param currency - Currency code (default: USD)
 */
export const formatCurrency = (amount: number, currency = "USD"): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};

/**
 * Formats a large number to compact form (e.g., 1.2K, 3.4M)
 * @param num - Number to format
 */
export const formatCompactNumber = (num: number): string => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(num);
};

/**
 * Formats percentage
 * @param value - Value to format as percentage
 * @param decimals - Number of decimal places
 */
export const formatPercentage = (value: number, decimals = 0): string => {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value / 100);
};

/**
 * Formats phone number
 * @param phoneNumber - Phone number string
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumber;
};

/**
 * Formats bytes to human readable format
 * @param bytes - Number of bytes
 * @param decimals - Number of decimal places
 */
export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
};

/**
 * Formats duration in seconds to readable time
 * @param seconds - Duration in seconds
 */
export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (secs > 0 || parts.length === 0) parts.push(`${secs}s`);

  return parts.join(" ");
};

/**
 * Formats reading time
 * @param wordCount - Number of words
 * @param wordsPerMinute - Reading speed (default: 200)
 */
export const formatReadingTime = (wordCount: number, wordsPerMinute = 200): string => {
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};
