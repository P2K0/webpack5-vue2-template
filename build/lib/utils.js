const path = require("path");

const resolvePath = (_path) => path.resolve(process.cwd(), _path);

module.exports = {
  resolvePath
};
