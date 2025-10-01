/**
 * Theme constants and configuration
 */

export const COLORS = {
  // Background layers - Dark
  deepMidnight: "#0A0E12",
  obsidian: "#141821",
  graphite: "#1E2530",
  slate: "#2A3441",

  // Background layers - Light
  ivory: "#FDFCFA",
  parchment: "#F7F5F2",
  pearl: "#EDE9E4",
  limestone: "#E2DDD6",

  // Brand colors
  brand: {
    emerald: "#2D5F4C",
    emeraldDark: "#1A3D32",
    brass: "#B8945F",
    gold: "#D4AF37",
    crimson: "#8B2635",
    crimsonLight: "#C4524C",
    steelSage: "#5A6D6A",
  },

  // Text colors - Dark
  pureWhite: "#FFFFFF",
  platinum: "#E8E8E8",
  silver: "#B8BCC4",
  ash: "#7A8088",

  // Text colors - Light
  charcoal: "#1A1D1F",
  graphiteText: "#2C3539",
  steelText: "#4A5560",
  mist: "#6B7280",
} as const;

export const GRADIENTS = {
  primary: "linear-gradient(135deg, #2D5F4C 0%, #1A3D32 100%)",
  gold: "linear-gradient(135deg, #D4AF37 0%, #B8945F 50%, #8B7355 100%)",
  crimson: "linear-gradient(135deg, #C4524C 0%, #8B2635 100%)",
  tealShine: "linear-gradient(135deg, #3A6B6F 0%, #2D5F4C 100%)",
  mesh: "radial-gradient(at 27% 37%, #2D5F4C 0px, transparent 50%), radial-gradient(at 97% 21%, #1A3D32 0px, transparent 50%), radial-gradient(at 52% 99%, #0A0E12 0px, transparent 50%)",
} as const;

export const SHADOWS = {
  sm: "0 2px 8px rgba(0, 0, 0, 0.1)",
  md: "0 4px 16px rgba(0, 0, 0, 0.15)",
  lg: "0 8px 32px rgba(0, 0, 0, 0.2)",
  xl: "0 20px 60px rgba(0, 0, 0, 0.3)",
  glowGreen: "0 0 24px rgba(45, 95, 76, 0.3)",
  glowGold: "0 0 24px rgba(212, 175, 55, 0.25)",
} as const;

export const BREAKPOINTS = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const SPACING = {
  section: {
    sm: "4rem",
    md: "6rem",
    lg: "8rem",
    xl: "10rem",
  },
  container: {
    xs: "1rem",
    sm: "1.5rem",
    md: "2rem",
    lg: "3rem",
  },
} as const;

export const ANIMATION_DURATION = {
  fast: 150,
  base: 300,
  slow: 500,
  slower: 800,
} as const;

export const Z_INDEX = {
  background: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  popover: 50,
  toast: 60,
  tooltip: 70,
} as const;
