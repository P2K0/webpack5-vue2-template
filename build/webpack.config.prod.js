const { merge } = require("webpack-merge");

const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const rules = require("./lib/rules");
const externals = require("./lib/cdn");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/main/[name]-[contenthash:8].js",
    chunkFilename: "js/chunks/[name]-[contenthash:8].js",
    assetModuleFilename: "images/[name]-[contenthash:8][ext]"
  },
  cache: false,
  module: { rules: rules("prod") },
  optimization: {
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        common: {
          priority: -20,
          maxSize: 1024 * 30,
          minSize: 1024 * 15,
          reuseExistingChunk: true
        },
        modules: {
          chunks: "all",
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
          filename: "js/modules/[name]-[contenthash:8].js"
        },
        vue: {
          chunks: "all",
          priority: 40,
          name: "vue",
          reuseExistingChunk: true,
          test: /[\\/]vue-router[\\/]|[\\/]vue[\\/]|[\\/]vuex[\\/]/,
          filename: "libs/vue/[name].js"
        },
        coreJs: {
          chunks: "all",
          priority: 50,
          name: "core-js",
          test: /[\\/]core-js[\\/]/,
          filename: "libs/core-js/[name]-[contenthash:8].js"
        }
      }
    },
    minimizer: [
      new MiniCssExtractPlugin({ filename: "styles/[name]-[contenthash:8].css", ignoreOrder: true }),
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
  ...externals
});
