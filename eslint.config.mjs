import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // Regras de qualidade de código
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",

      // Regras de formatação e estilo
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
      "eol-last": "error",
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["error", "always"],
      "quotes": ["error", "single", { avoidEscape: true }],
      "jsx-quotes": ["error", "prefer-double"],
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  },
];

export default eslintConfig;
