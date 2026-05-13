const DATA_TW = {
  // ── 共用導覽列 ──────────────────────────────────────────────
  nav: {
    siteTitle: "MYFILE",
    links: {
      home: { label: "首頁", href: "./index.html" },
      intro: { label: "關於我", href: "./intro.html" },
      works: { label: "作品", href: "./works.html" },
      contact: { label: "聯絡", href: "./contact.html" },
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
            text: "新北市立板橋高中",
          },
          {
            text: "國立臺北教育大學",
            children: [
              {
                text: "藝術與造型設計學系(藝術組)",
                note: "一年級(轉系前)",
              },
              {
                text: "數位科技設計學系",
              },
            ],
          },
        ],
      },
      {
        heading: "簡介",
        type: "paragraph",
        lines: [
          `畢業於國立臺北教育大學數位科技設計學系。
            在進入畢業科系前，自同校的藝術與造型設計學系轉系而來的經歷
            使我具備設計與前端開發的跨領域背景，
            能同時從使用者體驗與實作角度進行網站開發，
            讓網站不只具備基本的功能導向，也能夠運用色彩學與設計理論，
            使網站在視覺上亦能帶給使用者舒適的視覺體驗。

            在學期間由藝術與設計領域轉向數位技術，
            逐步確立以前端開發作為職涯方向，
            並透過課程與自主學習累積實作經驗。
            目前熟悉 HTML、CSS、JavaScript，
            能運用 React 建立具備 RWD 響應式設計的網站，
            搭配 Git 與 GitHub 進行版本控制，具備獨立完成前端專案開發的能力。

            在開發過程中，我重視code的結構與可維護性，
            透過component拆分與模組化設計提升開發效率與可讀性，
            儘管偶爾會運用 AI 工具，
            但在整體流程中AI工具僅僅是負責問題排解、prototype demo以及套件語法查詢而已，
            專案的主導撰寫仍以我自身邏輯判斷為主，
            以此確保專案品質與穩定性不被AI的幻覺和記憶範圍限制影響。

            未來希望能投入前端工程師或網頁設計師職位，
            持續在實務專案中精進技術能力，
            並結合自身設計背景，打造兼具使用體驗與實作品質的網頁專案。`,
        ],
      },
    ],
  },

  // ── works.html ───────────────────────────────────────────────
  works: {
    pageTitle: "專案作品",
    projects: [
      {
        heading: "MYFILE",
        items: [
          {
            label: "狀態",
            state: ["已完成", "#3f693f"],
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
              text: ["版本更新歷程", "部屬成品"],
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
      {
        heading: "Toyhouse Profile模板",
        items: [
          {
            label: "狀態",
            state: ["已完成", "#3f693f"],
          },
          {
            label: "作品類別",
            value: "網頁(局部模板)",
            note: "",
          },
          {
            label: "設計理念",
            description: `以角色 Monaqsia（冥焰龍）的世界觀為核心，
            將深邃夜色與幽冷的水藍螢光感融入版面設計。
            採用與 MYFILE 一致的藍紫色系色盤，
            透過半透明背景層、GIF 動態背景與 box-shadow 發光效果，
            強化神秘暗黑的視覺氛圍。
            整體佈局使用 Bootstrap 網格彈性排版，
            左側為角色立繪展示區，
            右側以頁籤切換呈現個人介紹、喜好與 DNI 等資訊，
            兼顧資訊密度與閱讀動線，
            並在有限的 Toyhouse 模板框架內達到高度客製化的視覺呈現。`,
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
                text: "Toyhouse 平台的 CSS 作用範圍受限，部分樣式無法直接覆寫平台原生樣式",
                solution:
                  "改以 inline style 直接寫入各元素，或透過高權重選擇器強制套用自訂樣式",
                note: "由此熟悉了平台環境的限制，也更加靈活地運用 Bootstrap class 與自訂 style 交互搭配的技巧",
              },
            ],
          },
          {
            label: "版本歷程",
            link: {
              text: ["", "部屬成品"],
              href: ["#", "https://toyhou.se/Nokinok"],
              note: "由於是在 Toyhouse 上的編譯器進行開發，因此沒有留存任何歷程記錄",
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
      {
        heading: "古林萃室",
        items: [
          {
            label: "狀態",
            state: ["開發中", "#695e3f"],
          },
          {
            label: "作品類別",
            value: "網頁",
            note: "使用React框架、Vercel部屬",
          },
          {
            label: "設計理念",
            description: `以深邃的暗橄欖綠（#43453c）與霧霾茶色（#d0d9be）為主色調，
            呼應品牌「古法傳承、純淨契作」的自然茶文化精神。
            整體視覺採用大量留白與漸層層疊手法，搭配全幅動態背景輪播，
            在沉靜的大地色系中塑造出深山茶園的清幽氛圍。
            字體選用兼具古典韻味與現代感的 Shippori Mincho B1、LXGW WenKai TC 與 Noto Serif TC，
            分別對應標題、導覽與內文等不同層次，強化傳統茶文化的文字美感。
            互動設計上以 GSAP ScrollTrigger 驅動的捲動動畫為核心，
            頁面各區塊在捲動時依序淡入展開，讓使用者在瀏覽中感受到如沏茶般緩慢而從容的節奏。
            產品頁採用篩選器與排序功能，輔以點擊展開的商品詳情頁，
            在資訊密度與閱讀流暢度之間取得平衡。`,
          },
          {
            label: "色票配色",
            palette: [
              {
                id: "For dark theme color (text, nav item hover background)",
                color: "#43453c",
              },
              {
                id: "For light theme color (text on dark, hover glow, background)",
                color: "#d0d9be",
              },
              {
                id: "For nav background / footer background",
                color: "#000000",
              },
              {
                id: "For content section background gradient (top)",
                color: "rgba(208, 217, 190, 0.9)",
              },
              {
                id: "For content section background gradient (mid)",
                color: "rgba(151, 128, 46, 0.9)",
              },
              {
                id: "For content section background gradient (bottom)",
                color: "rgba(106, 35, 0, 0.9)",
              },
            ],
          },
          {
            label: "製作疑難",
            list: [
              {
                text: "GSAP ScrollTrigger 與 React 元件生命週期衝突，導致動畫在元件重新渲染後失效",
                solution:
                  "將 GSAP 初始化邏輯統一置於 useEffect 中，並搭配 gsapSetup.js 集中管理插件註冊，確保動畫只在元件掛載後執行一次",
                note: "過程中更深入理解了 React 渲染機制與副作用處理的時機，也建立了可重用的 GSAP 初始化模組",
              },
              {
                text: "RWD 響應式排版在不同斷點下導覽列與內容區塊出現重疊或位移問題",
                solution:
                  "改用 CSS 自訂屬性（--navHeight）統一管理導覽列高度，並以 calc() 動態計算各區塊的 margin-top，搭配 media query 針對窄螢幕調整版型",
                note: "此方法使導覽列高度成為全域單一來源，日後調整時只需修改一處，維護成本大幅降低",
              },
            ],
          },
          {
            label: "版本歷程",
            link: {
              text: ["版本更新歷程", "部屬成品"],
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
    pageTitle: "聯繫方式",
    sections: [
      {
        heading: "SNS",
        type: "links",
        items: [
          {
            text: "Facebook",
            href: "https://www.facebook.com/gao.yu.wen.697831",
          },
          // { text: "Instagram", href: "https://www.instagram.com" },
          // {
          //   text: "X(Twitter)",
          //   href: "https://twitter.com",
          //   note: "(Twitter)",
          // },
        ],
      },
      {
        heading: "其他",
        type: "list",
        items: [
          { label: "行動電話", value: "0905932786" },
          {
            label: "電子信箱",
            value: `
            (第一信箱)35fghu@gmail.com
              (第二信箱)nokinok0321@gmail.com`,
          },
        ],
      },
    ],
  },
};
