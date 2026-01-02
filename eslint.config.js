import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

const nextCoreWebVitals = nextPlugin.configs["core-web-vitals"];

export default tseslint.config(
  {
    ignores: [".next", "next-env.d.ts"],
  },
  nextCoreWebVitals,
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    plugins: {
      "react-hooks": reactHooks,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
);
