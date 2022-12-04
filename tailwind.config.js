/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        akira: ["akira4"],
        akira1: ["akira4"],
        akira2: ["akira4"],
        akira4: ["akira4"],
        poppins: ["Poppins"],
      },
      colors: {
        "regal-black": "#202020",
        "regal-black1":
          "linear-gradient(180deg, #1D1D1D 1.49%, #000000 88.55%)",
      },
    },
  },
  plugins: [],
};
