/**
 * Unified Color Theme for Mikasasoft
 * Consistent color scheme across all pages and components
 */

export const BRAND_COLORS = {
  // Primary Gradient (Main brand colors)
  primary: 'from-blue-500 via-blue-600 to-purple-600',
  primaryHover: 'from-blue-400 via-blue-500 to-purple-500',
  
  // Secondary Gradient (Supporting colors)
  secondary: 'from-purple-500 via-purple-600 to-blue-600',
  secondaryHover: 'from-purple-400 via-purple-500 to-blue-500',
  
  // Accent Gradient (Highlights)
  accent: 'from-blue-500 via-emerald-500 to-purple-500',
  accentHover: 'from-blue-400 via-emerald-400 to-purple-400',
  
  // Service/Feature Colors (Consistent across all)
  web: 'from-blue-500 to-blue-600',
  mobile: 'from-purple-500 to-purple-600',
  design: 'from-emerald-500 to-emerald-600',
  cloud: 'from-blue-500 to-emerald-500',
  ai: 'from-purple-500 to-blue-500',
  security: 'from-emerald-500 to-blue-500',
  
  // Status Colors
  success: 'from-emerald-500 to-emerald-600',
  warning: 'from-yellow-500 to-orange-500',
  error: 'from-red-500 to-red-600',
  info: 'from-blue-500 to-blue-600',
} as const;

export const BACKGROUND_GRADIENTS = {
  // Primary background for all hero sections
  hero: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #2d3748 100%)',
  
  // Section backgrounds
  section: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
  
  // Card backgrounds
  card: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(30,41,59,0.4) 100%)',
} as const;

export const BACKGROUND_EFFECTS = {
  // Floating particles (consistent across all pages)
  particles: `
    radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
  `,
  
  // Grid patterns (consistent across all)
  grid: `
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
  `,
  
  // Dots patterns (when used)
  dots: `
    radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
  `,
} as const;

export const BORDER_COLORS = {
  primary: 'border-blue-500/30',
  secondary: 'border-purple-500/30',
  accent: 'border-emerald-500/30',
  card: 'border-white/10',
  hover: 'border-blue-500/50',
} as const;

export const TEXT_COLORS = {
  primary: 'text-white',
  secondary: 'text-zinc-300',
  muted: 'text-zinc-400',
  accent: 'text-blue-400',
  success: 'text-emerald-400',
  warning: 'text-yellow-400',
  error: 'text-red-400',
} as const;