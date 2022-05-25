import NProgress from "@/plugins/nprogress";

export function beforeEach(to, from, next) {
  NProgress.start();
  next();
}

export function afterEach(to) {
  document.title = to.meta.title || "";
  NProgress.done();
}
