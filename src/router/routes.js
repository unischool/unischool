const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "class/:courseId",
        component: () => import("pages/GeneralClassPage.vue"),
      },
      {
        path: "death_and_life",
        component: () => import("pages/DeathAndLifePage.vue"),
      },
      {
        path: "nullity_13",
        component: () => import("pages/Nullity_13Page.vue"),
      },
      {
        path: "life_art_elem",
        component: () => import("pages/Life_Art_ElemPage.vue"),
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
