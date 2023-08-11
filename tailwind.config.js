/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*/**.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        mainBg: "var(--background-main)"
      },
      textColor: {
        main: "var(--content)"
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

