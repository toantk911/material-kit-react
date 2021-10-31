const path = require('path');
const { paths } = require('react-app-rewired');
const rewireAliases = require('react-app-rewire-aliases');

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@api': path.resolve(__dirname, 'src/api'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@common': path.resolve(__dirname, 'src/common'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@redux': path.resolve(__dirname, 'src/redux'),
    '@utils': path.resolve(__dirname, `${paths.appSrc}/utils`),
    '@views': path.resolve(__dirname, 'src/views')
  })(config, env);

  return config;
};
