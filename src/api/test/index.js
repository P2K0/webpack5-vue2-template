function getGood() {
  return Promise.resolve("成功请求示例");
}

function getBad() {
  return Promise.reject(new Error("错误请求示例"));
}

module.exports = {
  getGood,
  getBad
};
