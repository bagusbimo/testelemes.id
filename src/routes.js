/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  {
    path: "/",
    meta: { title: "Home" },
    component: () => import("./views/Home.vue"),
  },
  { path: "/:path(.*)", component: () => import("./views/NotFound.vue") },
];
