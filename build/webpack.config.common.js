const { VueLoaderPlugin } = require("vue-loader");
const { ProvidePlugin } = require("webpack");

const HtmlPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const chalk = require("chalk");
const { resolvePath } = require("./lib/utils");
const alias = require("./lib/alias");

module.exports = {
  entry: ["./src/main.js"],
  output: {
    publicPath: "/",
    clean: true,
    path: resolvePath("./dist/")
  },
  resolve: {
    alias,
    extensions: [".js", ".vue"],
    fallback: { path: require.resolve("path-browserify") }
  },
  plugins: [
    new HtmlPlugin({
      inject: "head",
      filename: "index.html",
      template: resolvePath("./public/index.html"),
      minify: { removeComments: true, collapseWhitespace: true, minifyCSS: true }
    }),
    new ProvidePlugin({ process: require.resolve("process/browser") }),
    new ProgressBarPlugin({ format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`, clear: true }),
    new VueLoaderPlugin()
  ],
  optimization: { runtimeChunk: true, nodeEnv: process.env.NODE_ENV }
};
