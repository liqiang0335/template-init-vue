module.exports = {
  extends: ["eslint:recommended", "plugin:vue/essential"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
<<<<<<< HEAD
  },
  globals: {
    importName: true,
=======
    node: true
  },
  globals: {
    importName: true
>>>>>>> 9a781bf6860bd1a132ad6831559e7e9322b78408
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: 2,
    "no-irregular-whitespace": "off",
    "no-console": "off",
  },
};
