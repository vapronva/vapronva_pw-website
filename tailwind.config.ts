import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "deep-regal-blue": "#0e1825",
        "deep-gray": "#090c14",
        "deep-slate": "#080b16",
        "deep-slate-2": "#0c0f1a",
        mc_2f7c_4: "#2e3d59",
        pfp_pp: "#81d97e",
        ba_b16c_1: "#737373",
        el_82f7_4: "#bfcdd9",
        el_82f7_7: "#595659",
        el_82f7_8: "#5176a6",
        el_82f7_9: "#595959",
        od_4ba7_12: "#a7c6d9",
        sh_a792_3: "#445925",
        al_0c3d_3: "#D94343",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        smm: {
          max: "639px",
        },
      },
      fontSize: {
        xa: ".9rem",
        xe: ".75rem",
        xn: ".65rem",
        xd: ".55rem",
        xm: ".45rem",
        xc: ".35rem",
        xz: ".25rem",
        xy: ".15rem",
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
        glow_sm_3: [
          "0 0px 20px rgba(255,255, 255, 0.1)",
          "0 0px 4px rgba(255, 255,255, 0.15)",
          "0 0px 1px rgba(255, 255,255, 0.2)",
        ],
        glow_sm_4: [
          "0 0px 20px rgba(255,255, 255, 0.6)",
          "0 0px 4px rgba(255, 255,255, 0.3)",
          "0 0px 1px rgba(255, 255,255, 0.4)",
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
      padding: {
        "-1": "-0.25rem",
        "-2": "-0.5rem",
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
} satisfies Config;
