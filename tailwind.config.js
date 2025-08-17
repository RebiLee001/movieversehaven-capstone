export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#F3F4F6", // classic light gray
          DEFAULT: "#111827", // dark text
          accent: "#2563EB", // blue highlight
        },
      },
    },
  },
  plugins: [],
};
