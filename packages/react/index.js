module.exports = {
  extends: [
    '@nawimi/eslint-config-base',
    './rules/eslint',
    './rules/react',
  ].map(require.resolve),
  rules: {}
};
