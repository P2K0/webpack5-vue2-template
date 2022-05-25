const { merge } = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");
const openInEditor = require("launch-editor-middleware");

const { resolvePath } = require("./lib/utils");
const rules = require("./lib/rules");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  stats: "errors-warnings",
  mode: "development",
  cache: { type: "memory" },
  module: { rules: rules() },
  output: {
    filename: "js/[name].js",
    chunkFilename: "js/chunks/[name].js",
    assetModuleFilename: "images/[name][ext]"
  },
  devtool: "eval-cheap-module-source-map",
  plugins: [
    new ESLintPlugin({
      fix: true,
      extensions: ["js", "vue"],
      exclude: "node_modules",
      lintDirtyModulesOnly: true,
      quiet: true
    })
  ],
  devServer: {
    hot: true,
    open: true,
    compress: true,
    host: "0.0.0.0",
    static: resolvePath("./dist/"),
    client: { logging: "error", overlay: true },
    proxy: {
      "/api": {
        target: "http://www.baidu.com/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    setupMiddlewares: (middleware, { app }) => { app.use("/__open-in-editor", openInEditor("code")); return middleware; }
  },
  optimization: { splitChunks: false, removeEmptyChunks: false, removeAvailableModules: false }
});
