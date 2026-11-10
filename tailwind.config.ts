import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080D17",
        navy: "#0B1220",
        panel: "#101B2D",
        graphite: "#1E293B",
        blue: "#176BFF",
        cyan: "#42D6FF",
        mist: "#F4F7FB",
        muted: "#9EADC2",
        line: "rgba(166,194,230,0.14)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
