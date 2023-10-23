/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVar", "sans-serif"],
      },
      screens: {
        smm: {
          max: "639px",
        },
      },
      fontSize: {
        xn: ".65rem",
        xd: ".55rem",
        xm: ".45rem",
        xc: ".35rem",
        xz: ".25rem",
        xy: ".15rem",
      },
      colors: {
        "regal-blue": "#243c5a",
        "deep-regal-blue": "#0e1825",
        "deep-gray": "#090c14",
        "deep-slate": "#080b16",
        "deep-slate-2": "#0c0f1a",
        mccin_4: "#2e3d59",
        pfp_pp: "#81d97e",
        ba_b16c_1: "#737373",
        el_82f7_7: "#595659",
        el_82f7_8: "#5176a6",
        el_82f7_9: "#595959",
        omsk_drone_fullcentre_summer_twon: "#a7c6d9",
        sh_a792_3: "#445925",
        alt_vil_excur_forest_river_twtw_1: "#8c8c8c",
      },
      dropShadow: {
        glow_lg: [
          "0 0px 4px rgba(255,255, 255, 0.45)",
          "0 0px 1px rgba(255, 255,255, 0.175)",
          "0 0px 1px rgba(255, 255,255, 0.4)",
        ],
        glow_lg_2: [
          "0 0px 20px rgba(255,255, 255, 0.9)",
          "0 0px 4px rgba(255, 255,255, 0.55)",
          "0 0px 1px rgba(255, 255,255, 0.4)",
        ],
        glow_sm: [
          "0 0px 4px rgba(255,255, 255, 0.25)",
          "0 0px 1px rgba(255, 255,255, 0.175)",
        ],
        glow_sm_2: [
          "0 0px 20px rgba(255,255, 255, 0.8)",
          "0 0px 4px rgba(255, 255,255, 0.45)",
          "0 0px 1px rgba(255, 255,255, 0.5)",
        ],
        pfp_pp: [
          "0 0px 4px rgba(32, 144, 47, 0.45)",
          "0 0px 1px rgba(32, 144, 47, 0.175)",
        ],
        pfp_pp_2: [
          "0 0px 20px rgba(32, 144, 47, 0.9)",
          "0 0px 4px rgba(32, 144, 47, 0.55)",
          "0 0px 1px rgba(32, 144, 47, 0.4)",
        ],
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
      },
      lineHeight: {
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        tighter: "1.075",
        tightie: "1.15",
      },
    },
  },
  plugins: [],
};
