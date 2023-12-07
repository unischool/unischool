# 用戶體驗(User Experience) & 功能需求(Feature Request)

(有問號的部份請秋慧再於本面逐步回答，以瞭解需求)

## 報名流程

1. 打開手機
2. 進入本網站 (或PWA   >>>  需要專案完成後才能公開，否則PWA會安裝到測試用的舊版本 )
3. 搜尋Search   (Search 應放在Tool bar上?? 空間要夠才行。  首頁要不要放??)
4. 進入課程頁
* 動態路由
* History Mode 取代 Hash mode。
* 課程資料暫時在 src/i18n/zh-CN 資料夾中,  請秋慧再編輯和擴增, 裡面有email的話要留意，用

```<a href="mailto: example{'@'}test.com">example{'@'}test.com</a>```

的格式

5. 加入購物車(加入購物車無需先login? 結賬前需要login嗎? login/logout的Auth worker需要另開一個Github Repo )

6. 查看購物車(分為未購 、 已購 和 已完成  >> 是不是每個課程物件要有一個datetime的值如「2024/01/26」?? 涉及資料規格化)

7. 結帳(信用卡支付 + 支付寶支付?? 還有哪些?  Stripe金流要接上CloudFlare Worker >> Worker 需要 新開一個Github Repo, 之後用Wrangler管理 >> 請秋慧之後再安裝Wrangler )

## 整理一下TODO & 技術充電站:

1. Search bar & 搜尋結果(Search Resault) >> 用Quasar的Search Component
2. [動態路由技術文件](https://router.vuejs.org/guide/essentials/dynamic-matching)
3. 其他...之後邊做邊看