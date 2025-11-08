import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Sanitizes a URL to prevent XSS attacks
 * Only allows safe URL schemes: http, https, and data:image/*
 *
 * @param url - The URL to sanitize
 * @returns The sanitized URL or undefined if the URL is potentially malicious
 */
export function sanitizeUrl(url: string | undefined): string | undefined {
  if (!url || typeof url !== 'string') {
    return undefined;
  }

  const trimmedUrl = url.trim();

  if (trimmedUrl === '') {
    return undefined;
  }

  // Convert to lowercase for scheme checking
  const lowerUrl = trimmedUrl.toLowerCase();

  // Block javascript: and other dangerous protocols
  const dangerousProtocols = [
    'javascript:',
    'data:text/html',
    'vbscript:',
    'file:',
    'about:',
  ];

  for (const protocol of dangerousProtocols) {
    if (lowerUrl.startsWith(protocol)) {
      console.warn(`Blocked potentially malicious URL with protocol: ${protocol}`);
      return undefined;
    }
  }

  // Allow only safe protocols
  const safeProtocols = [
    'http://',
    'https://',
    'data:image/',
    '/', // Relative URLs
    './', // Relative URLs
    '../', // Relative URLs
  ];

  const isAllowed = safeProtocols.some(protocol => lowerUrl.startsWith(protocol));

  if (!isAllowed) {
    // If no protocol is specified, it might be a relative path without ./ or ../
    // Allow it if it doesn't contain suspicious patterns
    if (!lowerUrl.includes(':')) {
      return trimmedUrl;
    }

    console.warn(`Blocked URL with unsafe protocol: ${trimmedUrl}`);
    return undefined;
  }

  return trimmedUrl;
}

/**
 * Sanitizes text content to prevent XSS attacks
 * Removes HTML tags and dangerous characters
 *
 * @param text - The text to sanitize
 * @returns The sanitized text
 */
export function sanitizeText(text: string | undefined): string {
  if (!text || typeof text !== 'string') {
    return '';
  }

  // Remove HTML tags
  let sanitized = text.replace(/<[^>]*>/g, '');

  // Decode common HTML entities to prevent double-encoding issues
  const entityMap: Record<string, string> = {
    '&lt;': '<',
    '&gt;': '>',
    '&amp;': '&',
    '&quot;': '"',
    '&#x27;': "'",
    '&#x2F;': '/',
  };

  Object.keys(entityMap).forEach(entity => {
    sanitized = sanitized.replace(new RegExp(entity, 'g'), entityMap[entity]);
  });

  // Remove any remaining HTML tags that might have been encoded
  sanitized = sanitized.replace(/<[^>]*>/g, '');

  return sanitized;
}
