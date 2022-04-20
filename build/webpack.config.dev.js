const { merge } = require("webpack-merge");

const { resolvePath } = require("./lib/utils.js");

const rules = require("./lib/rules.js");
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  output: { filename: "js/[name].js" },
  optimization: { nodeEnv: "development" },
  module: { rules: rules() },
  devServer: {
    hot: true,
    open: true,
    static: resolvePath("./dist/"),
    proxy: {}
  }
});
