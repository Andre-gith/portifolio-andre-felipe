export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7c6ff7",
        accent: "#6b46c1",
        muted: "#94a3b8"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      }
    },
  },
  plugins: [],
}