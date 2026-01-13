/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "inter": ["'Inter'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "7.5xl": "75px",
        "5.5xl": "50px",
        "4.5xl": "40px",
        "1xl": "22px"
      },
      spacing: {
        "2.5": "10px",
        "3.5": "15px",
        "4.5": "18px",
        "7.5": "30px",
        "12.5": "50px",
        "14.5": "54px",
        "15": "60px",
        "15.5": "75px",
        "25": "100px"
      },
      boxShadow: {
        "3xl": "0px 14px 21px 0px rgba(58, 66, 89, 0.05)",
        "4xl": "0px 0px 8px 0px rgba(0, 0, 0, 0.15)"
      },
      dropShadow: {
        "3xl": "0 4px 50px rgba(0, 0, 0, 0.15)",
        "4xl": "0 0px 20px rgba(0, 31, 63, 0.15)"
      },
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        green: {
          DEFAULT: "var(--green)"
        },
        purple: {
          DEFAULT: "var(--purple)"
        },
        gray: {
          DEFAULT: "var(--gray)"
        },
      },
      borderRadius: {
        "2.5xl": "20px"
      },
      keyframes: {
        "slideDown": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" }
        },
        "fadeInUp": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "slideDown": "slideDown 0.35s ease-out",
        "fadeInUp": "fadeInUp 0.8s ease forwards",
        "float": "float 3s ease-in-out infinite"
      },
    },
  },
  plugins: [],
}
