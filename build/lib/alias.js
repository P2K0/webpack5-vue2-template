const { resolvePath } = require("./utils.js");

module.exports = {
  "@": resolvePath("./src"),
  "@api": resolvePath("./src/api"),
  "@assets": resolvePath("./src/assets"),
  "@styles": resolvePath("./src/styles"),
  "@components": resolvePath("./src/components"),
  "@mixins": resolvePath("./src/mixins"),
  "@plugins": resolvePath("./src/plugins"),
  "@router": resolvePath("./src/router"),
  "@store": resolvePath("./src/store"),
  "@utils": resolvePath("./src/utils"),
  "@views": resolvePath("./src/views"),
  "@layouts": resolvePath("./src/layouts"),
  "@mock": resolvePath("./src/mock")
};
