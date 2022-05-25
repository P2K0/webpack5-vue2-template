const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const dev = require("./webpack.config.dev");

dev.cache = false;

const result = new SpeedMeasurePlugin().wrap(dev);

module.exports = result;
