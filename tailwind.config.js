/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#808080",
          "200": "#2a2a2a",
          "300": "#1a1a1a",
          "400": "rgba(255, 255, 255, 0.5)",
          "500": "rgba(15, 15, 15, 0.5)",
        },
        lightgray: "#ccc",
        darkgray: "#b3b3b3",
        "main-black": "#0f0f0f",
        darkslategray: {
          "100": "#424242",
          "200": "#333",
        },
        dimgray: "#4d4d4d",
        black: "#000",
        "main-white": "#f8f8f8",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "10xs": "3px",
        "12xs": "1px",
      },
    },
    fontSize: {
      lg: "18px",
      sm: "14px",
      xs: "12px",
      "17xl": "36px",
      "5xl": "24px",
      "8xs-5": "4.5px",
      "7xs": "6px",
      "smi-3": "12.3px",
      "9xs-5": "3.5px",
      "10xs": "3px",
      "4xs": "9px",
      "2xs": "11px",
      "13xl": "32px",
      "45xl": "64px",
      "5xs": "8px",
      "8xs": "5px",
      base: "16px",
      "5xl-6": "24.6px",
      xl: "20px",
      "lgi-5": "19.5px",
      "4xs-3": "8.3px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};