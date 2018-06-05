/* eslint-disable no-param-reassign */
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { injectBabelPlugin } = require('react-app-rewired');
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  );
  config = rewireStyledComponents(config, env);
  // Add alias
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, './src'),
  };

  return config;
};
