// 引入 Quasar 框架的 boot 方法和 Vue 的 createI18n 方法
import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
// 引入包含翻譯信息的 messages
import messages from "src/i18n";

// 定義一個 boot 函數，此函數將在應用啟動時被調用
export default boot(({ app }) => {
  // 創建一個 i18n 實例
  const i18n = createI18n({
    locale: "zh-CN", // 設定預設語言為簡體中文
    globalInjection: true, // 允許在模板中直接使用 $t 方法
    messages, // 使用引入的翻譯信息
    warnHtmlMessage: false, // 禁用對 HTML 消息的警告
  });

  // 將 i18n 實例添加到 Vue 應用中
  app.use(i18n);
});
