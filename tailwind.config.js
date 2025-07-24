/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy:  "#0c1233",   // darkest background (#040926 in the mock)
        indigo:"#1e2f7a",   // mid section bg
        fog:   "#eef0fc",   // light section bg
      },
      fontFamily: {
  serif: ["var(--font-playfair)", "serif"],
  sans: ["var(--font-inter)", "sans-serif"],
},
    },
  },
  plugins: [],
}

