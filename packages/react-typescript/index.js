module.exports = {
  extends: [
    '@nawimi/eslint-config-react',
    '@nawimi/eslint-config-typescript',
    './rules/react-typescript',
  ].map(require.resolve),
  rules: {}
};
