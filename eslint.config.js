const expo = require('eslint-config-expo/flat');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  ...expo,
  {
    ignores: ['.expo/', 'node_modules/', 'dist/', 'web-build/'],
  },
];
