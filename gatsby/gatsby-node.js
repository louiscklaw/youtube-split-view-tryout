// https://www.mrozilla.cz/blog/gatsby-eslint-vscode-import-alias/

const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~src": path.resolve(__dirname, "src"),
        "~components": path.resolve(__dirname, "src/components"),
        "~contexts": path.resolve(__dirname, "src/contexts"),
        "~constants": path.resolve(__dirname, "src/constants"),
        "~scss": path.resolve(__dirname, "src/scss"),
        "~utils": path.resolve(__dirname, "src/utils"),
      }
    }
  });
};
