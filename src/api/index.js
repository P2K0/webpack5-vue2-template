const modulesFiles = require.context("./", true, /\.js$/);

export default modulesFiles.keys().reduce((modules, modulePath) => {
  const ctxModules = modules;
  const pathName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const moduleName = pathName.split("/")[0];
  if (moduleName === "index") return modules;
  const module = modulesFiles(modulePath);
  if (modules[moduleName]) {
    ctxModules[moduleName] = Object.assign(modules[moduleName], module);
  } else {
    ctxModules[moduleName] = module;
  }
  return ctxModules;
}, {});
