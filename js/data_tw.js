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
          "我是高宇妏，",
          "大一時我原本是就讀藝術與造型設計學系藝術組，",
          "後來才轉系到現在就讀的數位科技設計學系。",
          "雖然目前沒有實際的業界工作經驗，",
          "但我具備2D電腦繪圖、網頁前端開發與3D建模的基本能力，",
          "平常也會持續練習和精進技術。",
          "我是一個完美主義者，對細節很講究，",
          "做作品時會希望能盡可能達到自己心中的標準。",
          "我最大的興趣是創作原創世界觀與角色，喜歡從無到有地構思、設計，",
          "讓一個概念逐漸具象化。",
          "也因此我特別喜歡那些能結合故事性與視覺設計的創作形式，",
          "像是遊戲、動畫或是互動式企劃，未來也希望能往這個方向發展。",
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
