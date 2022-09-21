/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      screens: {
        "smm": {
          "max": "639px"
        },
      },
      fontSize: {
        "xn": ".65rem",
        "xd": ".55rem",
        "xm": ".45rem",
        "xc": ".35rem",
        "xz": ".25rem",
        "xy": ".15rem",
      },
      colors: {
        "regal-blue": "#243c5a",
        "deep-regal-blue": "#0e1825",
        "deep-gray": "#090c14",
        "deep-slate": "#080b16",
      },
    },
  },
  plugins: [],
}