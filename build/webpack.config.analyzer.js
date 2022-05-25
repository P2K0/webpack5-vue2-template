const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const prod = require("./webpack.config.prod");

prod.plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: true, analyzerHost: "0.0.0.0" }));

module.exports = prod;
