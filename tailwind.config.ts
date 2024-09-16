/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'md':'766px',
        'lg': '1025px',
        xlc: "1500px",
      },
      fontFamily: {
        ezra: ['Ezra', 'sans-serif'],
      },
      colors: {
        primaryColor: "var(--color-primary-main)",
        primaryColorLight: "var(--color-primary-light)",
        primaryColorDark: "var(--color-primary-dark)",
        primaryColorDarker: "var(--color-primary-darker)",
        primaryTextHighlight: "var(--color-primary-contrastText)", // default text color for blue
        primaryHoverColorLight: "var(--color-primary-lightHover)",
        primaryActiveColorLight: "var(--color-primary-lightActive)",
        primaryHoverColor: "var(--color-primary-mainHover)",
        primaryActiveColor: "var(--color-primary-mainActive)",
        primaryHoverColorDark: "var(--color-primary-darkHover)",
        primaryActiveColorDark: "var(--color-primary-darkActive)",
        successColor: "var(--color-success-main)",
        successColorLight: "var(--color-success-light)",
        successColorDark: "var(--color-success-dark)",
        successColorDarker: "var(--color-success-darker)",
        successTextHighlight: "var(--color-success-contrastText)", // default text color for success
        successHoverColorLight: "var(--color-success-lightHover)",
        successActiveColorLight: "var(--color-success-lightActive)",
        successHoverColor: "var(--color-success-mainHover)",
        successActiveColor: "var(--color-success-mainActive)",
        successHoverColorDark: "var(--color-success-darkHover)",
        successActiveColorDark: "var(--color-success-darkActive)",
        errorColor: "var(--color-error-main)",
        errorColorLight: "var(--color-error-light)",
        errorColorDark: "var(--color-error-dark)",
        errorColorDarker: "var(--color-error-darker)",
        errorTextHighlight: "var(--color-error-contrastText)", // default text color for error
        errorHoverColorLight: "var(--color-error-lightHover)",
        errorActiveColorLight: "var(--color-error-lightActive)",
        errorHoverColor: "var(--color-error-mainHover)",
        errorActiveColor: "var(--color-error-mainActive)",
        errorHoverColorDark: "var(--color-error-darkHover)",
        errorActiveColorDark: "var(--color-error-darkActive)",
        appBlue100: "#008CDB",
        appGray: "#F6F6F7",
        appGray100: "#797979",
        appGray200: "#595959",
        appGray300: "#DFDFDF",
        appGray400: "#B0B0B0",
        appGray500: "#535353",
        appWhite100: "#FEFEFE",
      },
      boxShadow: {
        checkBox: "0px 1px 3px 0px #E2E2E2 inset",
      },
    },
  },
  plugins: [],
};
