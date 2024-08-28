/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          white: "#fff",
          "main-black": "#0f0f0f",
          darkslategray: {
            "100": "#424242",
            "200": "#333",
          },
          gray: {
            "100": "#808080",
            "200": "#2a2a2a",
            "300": "#1a1a1a",
            "400": "rgba(255, 255, 255, 0.5)",
            "500": "rgba(15, 15, 15, 0.5)",
          },
          lightgray: "#ccc",
          darkgray: "#b3b3b3",
          black: "#000",
          "main-white": "#f8f8f8",
          dimgray: "#4d4d4d",
        },
        spacing: {},
        fontFamily: {
          poppins: "Poppins",
          montserrat: "Montserrat",
        },
      },
      fontSize: {
        "13xl": "32px",
        "5xl": "24px",
        lgi: "19px",
        "45xl": "64px",
        "19xl": "38px",
        "32xl": "51px",
        "5xs": "8px",
        "8xs": "5px",
        "7xs": "6px",
        base: "16px",
        "5xl-6": "24.6px",
        xl: "20px",
        "lgi-5": "19.5px",
        inherit: "inherit",
      },
      screens: {
        mq1025: {
          raw: "screen and (max-width: 1025px)",
        },
        mq975: {
          raw: "screen and (max-width: 975px)",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq725: {
          raw: "screen and (max-width: 725px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  