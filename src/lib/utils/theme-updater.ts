/**
 * Theme Updater Utilities
 * Functions to quickly update color schemes across components
 */

import { BRAND_COLORS } from '@/lib/constants/theme';

// Replace all old color patterns with consistent ones
export const STANDARDIZE_COLORS = {
  // Old orange-red patterns (Blog)
  'from-orange-400 via-red-500 to-pink-400': BRAND_COLORS.accent,
  'from-orange-400 via-red-500 to-yellow-400': BRAND_COLORS.accent,
  'from-orange-500 to-red-500': BRAND_COLORS.primary,
  'from-red-400 to-orange-400': BRAND_COLORS.secondary,
  
  // Old green patterns (Careers)  
  'from-green-400 via-emerald-500 to-blue-400': BRAND_COLORS.accent,
  'from-green-400 to-blue-400': BRAND_COLORS.accent,
  'from-green-500 to-emerald-500': BRAND_COLORS.design,
  'from-emerald-500 to-green-600': BRAND_COLORS.design,
  
  // Other scattered patterns
  'from-blue-400 via-purple-500 to-green-400': BRAND_COLORS.accent,
  'from-purple-500 to-pink-500': BRAND_COLORS.mobile,
  'from-green-500 to-blue-500': BRAND_COLORS.cloud,
  
  // Background gradients
  '135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%': '135deg, #111827 0%, #1f2937 50%, #2d3748 100%',
  
  // Badge colors  
  'from-orange-500/10 to-red-500/10': 'from-blue-500/10 to-purple-500/10',
  'from-orange-500/20 to-red-500/20': 'from-blue-500/20 to-purple-500/20',
  'border-orange-500/20': 'border-blue-500/20',
  'bg-orange-500/10': 'bg-blue-500/10',
  'text-orange-400': 'text-blue-400',
  
  // Green variations
  'from-green-500/20 to-blue-500/20': 'from-blue-500/20 to-purple-500/20',
  'border-green-500/30': 'border-blue-500/30',
  'text-green-400': 'text-blue-400',
  
  // Pink/Red replacements
  'from-pink-500 to-pink-600': BRAND_COLORS.design,
  'from-red-500 to-red-600': BRAND_COLORS.ai,
} as const;

// Consistent floating element colors
export const STANDARD_FLOATING_COLORS = `
  radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
  radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
  radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
`;

// Consistent tech badge colors  
export const STANDARD_TECH_BADGES = [
  { tech: 'React', left: 15, top: 20, color: 'from-blue-500/20 to-purple-500/20' },
  { tech: 'Node.js', left: 80, top: 70, color: 'from-blue-500/20 to-purple-500/20' },
  { tech: 'Python', left: 25, top: 40, color: 'from-blue-500/20 to-purple-500/20' },
  { tech: 'AWS', left: 65, top: 15, color: 'from-blue-500/20 to-purple-500/20' },
  { tech: 'Docker', left: 10, top: 60, color: 'from-blue-500/20 to-purple-500/20' },
  { tech: 'Kubernetes', left: 90, top: 35, color: 'from-blue-500/20 to-purple-500/20' },
  { tech: 'TypeScript', left: 50, top: 85, color: 'from-blue-500/20 to-purple-500/20' },
  { tech: 'Terraform', left: 75, top: 45, color: 'from-blue-500/20 to-purple-500/20' }
];

