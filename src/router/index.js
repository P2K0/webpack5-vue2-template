import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

import { beforeEach, afterEach } from "./intercept";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes
});

router.beforeEach(beforeEach.bind(router));
router.afterEach(afterEach.bind(router));

export default router;
