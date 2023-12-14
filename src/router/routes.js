import IndexPage from "pages/IndexPage.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: IndexPage },
      {
        path: "class/:cid",
        component: () => import("pages/GeneralClassPage.vue"),
      },
      {
        path: "cart",
        component: () => import("pages/CartPage.vue"),
      },
      {
        path: "admin",
        component: () => import("pages/AdminPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
