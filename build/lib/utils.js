const Path = require("path");

const resolvePath = (_path) => Path.resolve(process.cwd(), _path);

module.exports = {
  resolvePath
};
