const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const prod = require("./webpack.config.prod.js");
const result = Object.assign(prod, { plugins: [new BundleAnalyzerPlugin({ openAnalyzer: true })] });

module.exports = result;
