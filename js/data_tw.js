const DATA_TW = {
  // ── 共用導覽列 ──────────────────────────────────────────────
  nav: {
    siteTitle: "MYFILE",
    links: {
      home: { label: "首頁", href: "./index.html" },
      intro: { label: "自我介紹", href: "./intro.html" },
      works: { label: "作品集", href: "./works.html" },
      contact: { label: "聯絡方式", href: "./contact.html" },
    },
  },

  // ── index.html ───────────────────────────────────────────────
  home: {
    title: "MYFILE",
    subtitle: "K.Y.W.",
  },

  // ── intro.html ───────────────────────────────────────────────
  intro: {
    pageTitle: "KYW",
    sections: [
      {
        heading: "經歷",
        type: "list",
        items: [
          {
            text: "新北市立板橋高級中學",
          },
          {
            text: "國立臺北教育大學",
            children: [
              {
                text: "藝術與造形設計學系",
              },
              {
                text: "數位科技設計學系",
              },
            ],
          },
        ],
      },
      {
        heading: "個人簡介",
        type: "paragraph",
        lines: [
          `過去曾就讀於國立臺北教育大學藝術造形設計學系，
但因對Web與數位設計產生濃厚興趣，因此開始自學JavaScript與React，
之後轉入目前的數位科技設計學系。

目前也持續透過React進行個人作品製作，
並從前端開發與UI設計兩個面向持續精進自己的能力。
在製作時，我相當重視配色、留白、文字編排等細節的累積，
希望打造出「視覺氛圍」與「使用體驗」能自然融合的設計。

在團隊合作中，我會清楚表達自己的想法，
同時也重視傾聽成員的意見，只要有更好的方向，
便能快速調整與配合。
比起執著於自己的方案，我更重視「團隊能共同完成更好的作品」。

作為一名網頁設計師，
我希望能與團隊一起打造不只是外觀美觀，
也能讓使用者自然直覺操作的網站。`,
        ],
      },
    ],
  },

  // ── works.html ───────────────────────────────────────────────
  works: {
    pageTitle: "專案作品",
    projects: [
      {
        heading: "古林萃室",
        items: [
          {
            label: "狀態",
            state: ["開發中", "#695e3f", "https://tea-shop-q3tn.vercel.app/"],
          },
          {
            label: "作品類別",
            value: "網站",
            note: "使用 React 框架開發・部署於 Vercel",
          },
          {
            label: "設計理念",
            description: `以深沉的橄欖綠與柔和的米色系作為主色調，
希望呈現品牌所強調的「自然、寧靜、傳統」氛圍。

背景結合了漸層效果與全幅輪播設計，
藉此營造出茶園空氣感與沉穩安靜的視覺印象。

字體部分主要選用明體系字型，
並透過標題、內文與導覽列的角色區分，
兼顧資訊可讀性與品牌形象的一致性。

此外，也透過GSAP ScrollTrigger實作滾動動畫，
讓內容能以自然流暢的節奏呈現，
希望帶給使用者一種悠緩舒適的瀏覽體驗。

商品頁面則實作了篩選功能與詳細資訊顯示功能，
即使資訊量較多，也能讓使用者更容易找到目標商品。`,
          },

          // {
          //   label: "色票",
          //   palette: [
          //     {
          //       id: "深色主題用色（文字、導覽列 hover 背景）",
          //       color: "#43453c",
          //     },
          //     {
          //       id: "淺色主題用色（深底文字、hover 光暈、背景）",
          //       color: "#d0d9be",
          //     },
          //     {
          //       id: "導覽列背景 / 頁尾背景",
          //       color: "#000000",
          //     },
          //     {
          //       id: "內容區塊背景漸層（上方）",
          //       color: "rgba(208, 217, 190, 0.9)",
          //     },
          //     {
          //       id: "內容區塊背景漸層（中段）",
          //       color: "rgba(151, 128, 46, 0.9)",
          //     },
          //     {
          //       id: "內容區塊背景漸層（下方）",
          //       color: "rgba(106, 35, 0, 0.9)",
          //     },
          //   ],
          // },

          {
            label: "製作疑難",
            list: [
              {
                text: `GSAP動畫在React重新渲染後失效`,
                solution: `在useEffect內初始化GSAP，
並將plugin註冊集中整理於gsapSetup.js，
讓動畫只會在元件掛載後執行一次。`,
                note: `我也因此更深刻理解React的生命週期與渲染流程，
發現若沒有真正理解「什麼時候會發生什麼事」，
在與第三方套件整合時就很容易卡住。
每次解決錯誤，也都讓我對底層機制理解得更深。`,
              },
              {
                text: `在部分斷點尺寸下，導覽列會與內容重疊`,
                solution: `透過CSS Custom Property（--navHeight）統一管理導覽列高度，
並搭配calc()動態計算margin-top，
再使用media query進行細部調整。`,
                note: `也因此意識到「同樣的數值散落在多處」很容易成為Bug來源，
讓我逐漸養成透過變數集中管理的習慣。`,
              },
            ],
          },
          {
            label: "版本歷程",
            link: {
              text: ["版本更新紀錄", "部署成品"],
              href: [
                "https://github.com/noxHub1230/teaShop/commits/main/",
                "https://tea-shop-q3tn.vercel.app/",
              ],
            },
          },
          {
            label: "素材使用",
            links: [
              {
                text: "首頁背景",
                href: "https://giphy.com/gifs/forest-TuptaxRZphuyA",
              },
              {
                text: "其餘圖片由 ChatGPT 生成",
                href: "https://chatgpt.com",
              },
            ],
          },
        ],
      },
      {
        heading: "Toyhouse 個人頁面模板",
        items: [
          {
            label: "狀態",
            state: ["完成", "#3f693f", "https://toyhou.se/Nokinok"],
          },
          {
            label: "作品類別",
            value: "Web（部分模板）",
            note: "",
          },
          {
            label: "設計理念",
            description: `以原創角色「末納刻希亞」的特質為基礎，
結合偏暗的藍紫色系與淡淡的發光效果，
打造出帶有靜謐感的幻想風格設計。

背景加入半透明圖層與動畫效果，
即使是在模板限制較多的平台環境中，
也希望能營造出具有沉浸感的視覺體驗。

版面部分活用了Bootstrap的Grid System，
將角色插圖與個人資訊進行整理配置，
讓資訊量較多時仍能維持良好的閱讀性。

另外，也透過分頁切換功能整理資訊分類，
希望使用者能更直覺地找到想查看的內容。

即使在Toyhouse這種具有平台限制的環境下，
依然以兼顧設計感與可讀性為目標進行製作。`,
          },

          // {
          //   label: "色票",
          //   palette: [
          //     { id: "文字陰影", color: "aqua" },
          //     {
          //       id: "文字顏色、啟用時文字陰影、分隔線",
          //       color: "#affcff",
          //     },
          //     {
          //       id: "hover時文字陰影、啟用時文字顏色",
          //       color: "#2f25fa",
          //     },
          //     {
          //       id: "左側區域覆蓋圖層",
          //       color: "rgba(8, 26, 107, 0.99)",
          //     },
          //     {
          //       id: "頁面背景覆蓋漸層",
          //       color:
          //         "linear-gradient(90deg, rgb(28,28,37), rgb(32,22,82), rgba(32,22,82), rgb(35,33,92), rgba(31,50,121,0.8))",
          //     },
          //     {
          //       id: "導覽列背景",
          //       color:
          //         "linear-gradient(180deg, rgb(29,21,67), rgb(32,22,82), rgba(32,22,82), rgb(35,33,92), rgba(31,50,121,0.8))",
          //     },
          //   ],
          // },

          {
            label: "製作疑難",
            list: [
              {
                text: `Toyhouse平台對CSS的可套用範圍有限制，
有部分平台原生樣式無法直接覆蓋`,
                solution: `透過inline style與提高selector詳細度的方式進行處理`,
                note: `也因為存在限制，
反而讓我更常去思考「還能怎麼實現」。
這段經驗也讓我學會更靈活地結合Bootstrap與自訂CSS。`,
              },
            ],
          },
          {
            label: "版本歷程",
            link: {
              text: ["", "部屬成品"],
              href: ["#", "https://toyhou.se/Nokinok"],
              note: "由於是在Toyhouse內建編輯器上開發，因此沒有保留任何版本紀錄。",
            },
          },
          {
            label: "素材使用",
            links: [
              {
                text: "背景",
                href: "https://giphy.com/gifs/headlikeanorange-landscape-river-salmon-KH00JXnc2PQwE",
              },
              {
                text: "個人卡背景",
                href: "https://giphy.com/gifs/water-wave-flow-X4fPTLm2TCtkNiJnhE",
              },
              {
                text: "圖示",
                href: "https://fontawesome.com/search?ic=free-collection",
              },
              {
                text: "背景音樂",
                href: "https://www.youtube.com/watch?v=aHjpOzsQ9YI",
              },
            ],
          },
        ],
      },
      {
        heading: "MYFILE(舊版)",
        items: [
          {
            label: "狀態",
            state: [
              "已完成",
              "#3f693f",
              "https://unkn0321.github.io/2025WebPage2/",
            ],
          },
          {
            label: "作品類別",
            value: "網頁",
            note: "GitHub Page",
          },
          {
            label: "設計理念",
            description: `以深邃的深海藍紫色調為基底，
            搭配螢光水藍色（aqua/#affcff）的文字發光效果，
            營造出沉靜而帶有神秘感的視覺氛圍。
            整體採用動態影片背景疊加半透明色層的手法，
            使頁面在不同區塊間維持統一的色彩語境。
            字體選用兼顧典雅與現代感的 Noto Serif TC、Klee One 與 Zen Maru Gothic，
            分別對應標題、導覽與說明文字等不同層次的排版需求。
            互動設計上強調微動效，透過文字懸停時的位移與光暈變化，
            在克制的視覺語言中帶出細膩的操作回饋。`,
          },
          {
            label: "色票配色",
            palette: [
              { id: "For text shadow", color: "aqua" },
              {
                id: "For text color, text shadow(active), line",
                color: "#affcff",
              },
              {
                id: "For text shadow(hover), text color(active)",
                color: "#2f25fa",
              },
              {
                id: "For reder layer of left area",
                color: "rgba(8, 26, 107, 0.99)",
              },
              {
                id: "For reder layer of page background",
                color:
                  "linear-gradient(90deg, rgb(28,28,37), rgb(32,22,82), rgba(32,22,82), rgb(35,33,92), rgba(31,50,121,0.8))",
              },
              {
                id: "For navigator background",
                color:
                  "linear-gradient(180deg, rgb(29,21,67), rgb(32,22,82), rgba(32,22,82), rgb(35,33,92), rgba(31,50,121,0.8))",
              },
            ],
          },
          {
            label: "製作疑難",
            list: [
              {
                text: "部分功能需要使用 JavaScript 才能實現",
                solution: "透過自學與查閱資料自行摸索解決",
                note: "過程中也發現了處理既有動態樣式的其他方法，部分邏輯改以 JavaScript 處理後，CSS 的撰寫量也得以有所減少",
              },
            ],
          },
          {
            label: "版本歷程",
            link: {
              text: ["版本更新歷程", "DEMO"],
              href: [
                "https://github.com/unkn0321/2025WebPage2/commits/main/",
                "https://unkn0321.github.io/2025WebPage2/",
              ],
            },
          },
          {
            label: "素材使用",
            links: [
              {
                text: "Intro Page Background",
                href: "https://www.pexels.com/video/a-pastel-of-yellow-liquid-forms-different-patterns-3051357/",
              },
              {
                text: "Works Page Background",
                href: "https://www.pexels.com/video/abstract-video-4990242/",
              },
              {
                text: "Contact Page Background",
                href: "https://www.pexels.com/video/a-close-up-of-a-white-wave-pattern-4779866/",
              },
              {
                text: "left Area Background",
                href: "https://www.hcn.org/issues/54-9/climate-change-how-a-hidden-cave-can-help-scientists-understand-the-climate/",
              },
            ],
          },
        ],
      },
    ],
  },

  // ── contact.html ─────────────────────────────────────────────
  contact: {
    pageTitle: "聯絡方式",
    sections: [
      {
        heading: "SNS",
        type: "links",
        items: [
          {
            text: "Facebook",
            href: "https://www.facebook.com/gao.yu.wen.697831",
          },
        ],
      },
      {
        heading: "其他",
        type: "list",
        items: [
          { label: "手機號碼", value: "0905932786" },
          {
            label: "電子郵件",
            value: `
            （主要信箱）35fghu@gmail.com
            （次要信箱）nokinok0321@gmail.com`,
          },
        ],
      },
    ],
  },
};
