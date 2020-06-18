const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#4BB2F9',
        '@radio-button-bg': '#1B2A35',
        '@radio-solid-checked-color': '#000000',
        // @radio-button-checked-bg: @btn-default-bg;
        '@radio-button-color': '#4BB2F9',
        // @radio-button-hover-color: @primary-5;
        // @radio-disabled-button-checked-bg: tint(@black, 90%);
        // @radio-disabled-button-checked-color: @text-color-inverse;
        // @radio-wrapper-margin-right: 8px;
      }
    }
  }),
);
