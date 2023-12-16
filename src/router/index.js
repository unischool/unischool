// 引入 Quasar 框架的 route 函數
import { route } from "quasar/wrappers";

// 引入 vue-router 相關功能，包括創建路由器和不同的歷史模式
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

// 引入路由配置
import routes from "./routes";

/*
 * 這部分註釋說明了如何根據不同的模式（SSR或客戶端模式）來導出路由器實例。
 * 可以根據實際需要選擇同步或異步方式來創建路由器。
 */

// 導出路由器配置，這個函數可以是異步的
export default route(function (/* { store, ssrContext } */) {
  // 根據環境變量選擇合適的歷史模式
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  // 創建路由器實例
  const Router = createRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }), // 路由切換時滾動到頂部
    routes,

    // 使用選擇的歷史模式
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  return Router;
});
