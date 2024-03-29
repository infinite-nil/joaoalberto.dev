const { resolve } = require("node:path");

const project = resolve(__dirname, "tsconfig.json");

module.exports = {
  root: true,
  extends: [
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/react"),
    require.resolve("@vercel/style-guide/eslint/node"),
    require.resolve("@vercel/style-guide/eslint/next"),
  ],
  parserOptions: {
    project,
  },
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  overrides: [
    {
      files: ["./src/**/_*.tsx", "./src/**/*.page.tsx"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
