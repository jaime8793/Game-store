// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html", // This includes the root index.html
    "./src/**/*.{js,ts,jsx,tsx}", // This includes all JS/TS/JSX/TSX files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
