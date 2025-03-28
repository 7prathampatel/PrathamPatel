/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "accent-primary": "var(--accent-primary)",
        "accent-secondary": "var(--accent-secondary)",
        "border-color": "var(--border-color)",
        "shadow-color": "var(--shadow-color)",
      },
      fontFamily: {
        mono: ["monospace"],
      },
      boxShadow: {
        sm: "0 1px 2px var(--shadow-color)",
        md: "0 4px 6px var(--shadow-color)",
        lg: "0 10px 15px var(--shadow-color)",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
