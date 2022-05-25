module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:vue/recommended", "plugin:vue/essential", "airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./build/webpack.config.dev.js"
      }
    }
  },
  plugins: ["vue"],
  rules: {
    // 允许使用 console
    "no-console": "off",
    // 禁止尾随逗号
    "comma-dangle": ["error", {
      arrays: "never", objects: "never", imports: "never", exports: "never", functions: "never"
    }],
    // 使用双引号
    quotes: [2, "double", { avoidEscape: true, allowTemplateLiterals: true }]
  }
};
