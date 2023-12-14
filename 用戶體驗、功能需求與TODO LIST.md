# 用戶體驗(User Experience) & 功能需求(Feature Request)

(有問號的部份請秋慧再於本面逐步回答，以瞭解需求)

## 報名流程

1. 打開手機
2. 進入本網站 (或 PWA >>> 需要專案完成後才能公開，否則 PWA 會安裝到測試用的舊版本 )
3. 搜尋 Search (Search 應放在 Tool bar 上?? 空間要夠才行。 首頁要不要放??)
4. 進入課程頁

- 動態路由
- History Mode 取代 Hash mode。
- 課程資料暫時在 src/i18n/zh-CN 資料夾中, 請秋慧再編輯和擴增, 裡面有 email 的話要留意，用

`<a href="mailto: example{'@'}test.com">example{'@'}test.com</a>`

的格式

5. 加入購物車(加入購物車無需先 login，購物車資料存在 localStorage 裡 )

6. 查看購物車(分為未購 、 已購 和 已完成 >> 是不是每個課程物件要有一個 datetime 的值如「2024/01/26」?? 涉及資料規格化)

7. 結帳(信用卡支付 + 支付寶支付?? 還有哪些? Stripe 金流要接上 CloudFlare Worker >> Worker 需要 新開一個 Github Repo, 之後用 Wrangler 管理 >> 請秋慧之後再安裝 Wrangler )

## 整理一下 TODO & 技術充電站:

1. Search bar & 搜尋結果(Search Resault) >> 用 Quasar 的 Search Component
2. [動態路由技術文件](https://router.vuejs.org/guide/essentials/dynamic-matching)
3. 其他...之後邊做邊看
