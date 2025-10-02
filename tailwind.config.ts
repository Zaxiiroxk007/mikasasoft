import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors - Dark
        "deep-midnight": "#0A0E12",
        obsidian: "#141821",
        graphite: "#1E2530",
        slate: "#2A3441",

        // Background colors - Light
        ivory: "#FDFCFA",
        parchment: "#F7F5F2",
        pearl: "#EDE9E4",
        limestone: "#E2DDD6",

        // Brand colors - AOT Premium Theme
        emerald: {
          DEFAULT: "#2D5F4C",
          dark: "#1A3D32",
        },
        brass: "#B8945F",
        gold: "#D4AF37",
        crimson: {
          DEFAULT: "#8B2635",
          light: "#C4524C",
        },
        "steel-sage": "#5A6D6A",

        // Text colors - Dark
        "pure-white": "#FFFFFF",
        platinum: "#E8E8E8",
        silver: "#B8BCC4",
        ash: "#7A8088",

        // Text colors - Light
        charcoal: "#1A1D1F",
        "graphite-text": "#2C3539",
        "steel-text": "#4A5560",
        mist: "#6B7280",

        // Glass effects
        glass: {
          border: "rgba(255, 255, 255, 0.1)",
          bg: "rgba(255, 255, 255, 0.05)",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
        heading: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2D5F4C 0%, #1A3D32 100%)",
        "gradient-gold": "linear-gradient(135deg, #D4AF37 0%, #B8945F 50%, #8B7355 100%)",
        "gradient-crimson": "linear-gradient(135deg, #C4524C 0%, #8B2635 100%)",
        "gradient-mesh":
          "radial-gradient(at 27% 37%, #2D5F4C 0px, transparent 50%), radial-gradient(at 97% 21%, #1A3D32 0px, transparent 50%), radial-gradient(at 52% 99%, #0A0E12 0px, transparent 50%)",
      },
      boxShadow: {
        "glow-green": "0 0 24px rgba(45, 95, 76, 0.3)",
        "glow-gold": "0 0 24px rgba(212, 175, 55, 0.25)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center bottom",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
