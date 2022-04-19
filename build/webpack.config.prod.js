const { merge } = require("webpack-merge");

const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

const rules = require("./lib/rules.js");
const externals = require("./lib/cdn.js");
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/[name]-[contenthash:8].js",
    chunkFilename: "chunk/[name]-[contenthash:8].js"
  },
  module: { rules: rules("prod") },
  optimization: {
    nodeEnv: "production",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        },
        defaultVendors: { filename: "common/[name]-[contenthash:8].js" }
      }
    },
    minimizer: [
      new MiniCssExtractPlugin({ filename: "style/[name]-[contenthash:8].css" }),
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  },
  ...externals
});
