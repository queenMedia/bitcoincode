const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@hook': path.resolve(__dirname, 'src/hook/index.js'),
  })
);

