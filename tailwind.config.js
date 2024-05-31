/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: ["src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // COLOR
      colors: {
        transparent: "transparent",
        black: "#1E1E1E",
        gry: {
          30: "#F4F4F4",
          50: "#EFEFEF",
          70: "#B5B5B5",
          100: "#666666",
        },
        or: {
          50: "#F9D5BB",
          70: "#F3AC78",
          100: "#EB741E",
          110: "#d16719",
        },
        yw: {
          50: "#FEE8BB",
          70: "#FDD278",
          100: "#FCB41E",
          110: "#eda91c",
        },
        red: {
          50: "#FABEC1",
          70: "#F47D83",
          100: "#ED2630",
        },
        bl: {
          50: "#B9C2E3",
          70: "#7B8CC9",
          100: "#2743A6",
          110: "#1b317d",
        },
        "l-b": {
          50: "#BEE0EE",
          70: "#7EC2DD",
          100: "#2899C7",
        },
        grn: {
          30: "#e7f7ef",
          50: "#A6E5C6",
          70: "#66CC9B",
          100: "#10AC61",
        },
      },

      // FONT SIZE
      fontSize: {
        "fs-8": "0.5rem",
        "fs-9": "0.5625rem",
        "fs-10": "0.625rem",
        "fs-11": "0.6875rem",
        "fs-12": "0.75rem",
        "fs-13": "0.8125rem",
        "fs-14": "0.875rem",
        "fs-15": "0.9375rem",
        "fs-16": "1rem",
        "fs-17": "1.0625rem",
        "fs-18": "1.125rem",
        "fs-19": "1.1875rem",
        "fs-20": "1.25rem",
        "fs-21": "1.3125rem",
        "fs-22": "1.375rem",
        "fs-23": "1.4375rem",
        "fs-24": "1.5rem",

        "fs-26": "1.625rem",
        "fs-28": "1.75rem",
        "fs-30": "1.875rem",
        "fs-32": "2rem",
        "fs-34": "2.125rem",
        "fs-36": "2.25rem",
        "fs-38": "2.375rem",

        "fs-40": "2.5rem",
        "fs-42": "2.625rem",
        "fs-44": "2.75rem",
        "fs-46": "2.875rem",
        "fs-48": "3rem",
        "fs-50": "3.125rem",
        "fs-52": "3.25rem",
        "fs-54": "3.375rem",
        "fs-56": "3.5rem",
        "fs-58": "3.625rem",
        "fs-60": "3.75rem",
        "fs-62": "3.875rem",
        "fs-64": "4rem",

        // VW

        "fsw-8": "0.5vw",
        "fsw-9": "0.5625vw",
        "fsw-10": "0.625vw",
        "fsw-11": "0.6875vw",
        "fsw-12": "0.75vw",
        "fsw-13": "0.8125vw",
        "fsw-14": "0.875vw",
        "fsw-15": "0.9375vw",
        "fsw-16": "1vw",
        "fsw-17": "1.0625vw",
        "fsw-18": "1.125vw",
        "fsw-19": "1.1875vw",
        "fsw-20": "1.25vw",
        "fsw-21": "1.3125vw",
        "fsw-22": "1.375vw",
        "fsw-23": "1.4375vw",
        "fsw-24": "1.5vw",

        "fsw-26": "1.625vw",
        "fsw-28": "1.75vw",
        "fsw-30": "1.875vw",
        "fsw-32": "2vw",
        "fsw-34": "2.125vw",
        "fsw-36": "2.25vw",
        "fsw-38": "2.375vw",

        "fsw-40": "2.5vw",
        "fsw-42": "2.625vw",
        "fsw-44": "2.75vw",
        "fsw-46": "2.875vw",
        "fsw-48": "3vw",
        "fsw-50": "3.125vw",
        "fsw-52": "3.25vw",
        "fsw-54": "3.375vw",
        "fsw-56": "3.5vw",
        "fsw-58": "3.625vw",
        "fsw-60": "3.75vw",
        "fsw-62": "3.875vw",
        "fsw-64": "4vw",
      },

      // BORDER RADIUS
      borderRadius: {
        btn: "20px",

        "br-8": "0.5rem",
        "br-9": "0.5625rem",
        "br-10": "0.625rem",
        "br-11": "0.6875rem",
        "br-12": "0.75rem",
        "br-13": "0.8125rem",
        "br-14": "0.875rem",
        "br-15": "0.9375rem",
        "br-16": "1rem",
        "br-17": "1.0625rem",
        "br-18": "1.125rem",
        "br-19": "1.1875rem",
        "br-20": "1.25rem",
        "br-21": "1.3125rem",
        "br-22": "1.375rem",
        "br-23": "1.4375rem",
        "br-24": "1.5rem",
      },

      // SCREENS
      // screens: {
      //   'sm': {'min': '640px', 'max': '767px'},
      //   'md': {'min': '768px', 'max': '1023px'},
      //   'lg': {'min': '1024px', 'max': '1279px'},
      //   'xl': {'min': '1280px', 'max': '1535px'},
      //   '2xl': {'min': '1536px'},
      // },
      keyframes: {
        skeletonLoading: {
          "0%": {
            background: "#EFEFEF",
          },
          "100%": {
            background: "#c9c7c7",
          },
        },
      },

      boxShadow: {
        "3xl": "0 4px 15px 0 rgba(168, 155, 155, 0.25)",
      },
    },
  },
  plugins: [
    // ...
    "@tailwindcss/forms",
  ],
};
