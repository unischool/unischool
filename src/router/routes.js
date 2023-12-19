// 引入 IndexPage 組件，這通常是首頁組件
import IndexPage from "pages/IndexPage.vue";

// 定義應用的路由配置
const routes = [
  {
    // 定義根路徑 "/"
    path: "/",
    // 使用 lazy loading 加載 MainLayout 組件
    component: () => import("layouts/MainLayout.vue"),
    // 定義子路徑和它們對應的組件
    children: [
      // 當路徑為空（即根路徑）時，顯示 IndexPage 組件
      { path: "", component: IndexPage },
      {
        // 定義動態路徑 "class/:cid"，:cid 是一個動態參數
        path: "class/:cid", //  : is a key symobl
        // 使用 lazy loading 加載 GeneralClassPage 組件
        component: () => import("pages/GeneralClassPage.vue"),
      },
      {
        // 定義路徑 "cart"，顯示購物車頁面
        path: "cart",
        // 使用 lazy loading 加載 CartPage 組件
        component: () => import("pages/CartPage.vue"),
      },
      {
        // 定義管理員路徑 "admin"
        path: "admin",
        // 使用 lazy loading 加載 AdminPage 組件
        component: () => import("pages/AdminPage.vue"),
      },
      // 可以繼續添加更多路徑和組件...
    ],
  },
  // 更多路由配置...
];

// 導出路由配置
export default routes;
