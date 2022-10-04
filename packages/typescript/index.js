module.exports = {
  extends: [
    "@nawimi/eslint-config-base",
    "./rules/eslint",
    "./rules/typescript",
  ].map(require.resolve),
  rules: {},
};
