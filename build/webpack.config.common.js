const { ProvidePlugin } = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

const HtmlPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const { resolvePath } = require("./lib/utils.js");

const chalk = require("chalk");
const alias = require("./lib/alias.js");

module.exports = {
  entry: ["./src/main.js"],
  cache: { type: "filesystem" },
  output: {
    clean: true,
    path: resolvePath("./dist/"),
    assetModuleFilename: "images/[name]-[contenthash:8][ext]"
  },
  resolve: {
    alias,
    extensions: [".js", ".ts", ".vue"],
    fallback: { path: require.resolve("path-browserify") }
  },
  plugins: [
    new HtmlPlugin({
      inject: "head",
      filename: "index.html",
      template: resolvePath("./public/index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true
      }
    }),
    new ProvidePlugin({ process: require.resolve("process/browser") }),
    new ESLintPlugin({ fix: true, extensions: ["js", "vue"], exclude: "node_modules" }),
    new ProgressBarPlugin({ format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`, clear: true }),
    new VueLoaderPlugin()
  ]
};
