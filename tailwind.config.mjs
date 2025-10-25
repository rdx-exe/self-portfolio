/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // ✅ enables dark mode using the 'dark' class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌿 Existing light theme colors
        lightHover: "#fcf4ff",
        darkGreen: "#2b5329",
        midGreen: "#0e6b0e",
        lightGreen: "#649568",

        // 🌑 Added dark theme colors
        darkBg: "#0a0a0a", // main background
        darkCard: "#111827", // cards and sections
        darkHover: "#1f2937", // hover background
        darkBorder: "#374151", // subtle borders
        darkText: "#e5e7eb", // main text
        darkSubtext: "#9ca3af", // secondary text
        darkAccent: "#22c55e", // green accent highlight (matches your midGreen vibe)
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
        dark: "0 4px 15px rgba(0, 0, 0, 0.6)", // softer dark shadows
      },
    },
  },
  plugins: [],
};

export default config;
