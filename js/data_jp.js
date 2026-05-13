const DATA_JP = {
  // ── 共用導覽列 ──────────────────────────────────────────────
  nav: {
    siteTitle: "MYFILE",
    links: {
      home: { label: "ホーム", href: "./index.html" },
      intro: { label: "自己紹介", href: "./intro.html" },
      works: { label: "作品", href: "./works.html" },
      contact: { label: "連絡先", href: "./contact.html" },
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
        heading: "学歴・経歴",
        type: "list",
        items: [
          {
            text: "新北市立板橋高級中学校",
          },
          {
            text: "国立台北教育大学",
            children: [
              {
                text: "芸術造形デザイン学科（芸術コース）",
                note: "1年次（転科前）",
              },
              {
                text: "デジタルテクノロジーデザイン学科",
              },
            ],
          },
        ],
      },
      {
        heading: "プロフィール",
        type: "paragraph",
        lines: [
          `大学1年次は国立台北教育大学芸術造形デザイン学科芸術コースに在籍しておりましたが、,
          その後、現在のデジタルテクノロジーデザイン学科へ転科いたしました。
          実務経験はございませんが、
          デジタルイラスト・Webフロントエンド開発・3Dモデリングの基礎的な技術を習得しており、
          日頃より継続的に練習・研鑽を重ねております。
          完璧主義的な性格であり、細部にまでこだわりを持って制作に臨んでおります。
          制作においては、自身の理想とする水準を可能な限り追求することを大切にしております。
          最大の関心は、オリジナルの世界観とキャラクターの創作であり、
          ゼロから構想・デザインし、概念を具体的な形へと昇華させる過程に深い喜びを感じております。
          ストーリー性とビジュアルデザインを融合させた創作形式——
          ゲーム・アニメーション・インタラクティブ企画などの分野に特に強い関心を持ち、
          将来はそのような方向での活躍を目指しております。`,
        ],
      },
    ],
  },

  // ── works.html ───────────────────────────────────────────────
  works: {
    pageTitle: "制作実績",
    projects: [
      {
        heading: "MYFILE",
        items: [
          {
            label: "ステータス",
            state: ["完成", "#3f693f"],
          },
          {
            label: "作品種別",
            value: "Webサイト",
            note: "GitHub Pages",
          },
          {
            label: "デザインコンセプト",
            description: `深海を思わせる深みのある藍紫色をベースカラーとして採用し、
            蛍光水色（aqua/#affcff）のテキスト発光エフェクトと組み合わせることで、
            静謐かつ神秘的なビジュアルを構築いたしました。
            動画背景に半透明のカラーレイヤーを重ねる手法により、
            各セクション間で一貫した色彩表現を維持しております。
            フォントには典雅さと現代性を兼ね備えた Noto Serif TC・Klee One・Zen Maru Gothic を採用し、
            見出し・ナビゲーション・本文など、それぞれの役割に応じた階層的な組版を実現しました。
            インタラクションデザインはマイクロアニメーションを重視し、
            テキストホバー時の微細な位置変化とグロー効果により、
            抑制されたビジュアル言語の中に繊細な操作フィードバックをもたらしております。`,
          },
          {
            label: "カラーパレット",
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
            label: "制作上の課題",
            list: [
              {
                text: "一部の機能の実装に JavaScript が必要であることが判明した",
                solution:
                  "独学および資料参照により自力で解決策を模索・実装した",
                note: "制作過程において、既存の動的スタイル処理に関する別のアプローチも発見した。一部のロジックを JavaScript へ移行することで、CSS の記述量を削減することができた",
              },
            ],
          },
          {
            label: "更新履歴",
            link: {
              text: ["バージョン更新履歴", "デプロイ成果物"],
              href: [
                "https://github.com/unkn0321/2025WebPage2/commits/main/",
                "https://unkn0321.github.io/2025WebPage2/",
              ],
            },
          },
          {
            label: "使用素材",
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
        heading: "Toyhouse Profileテンプレート",
        items: [
          {
            label: "ステータス",
            state: ["完成", "#3f693f"],
          },
          {
            label: "作品種別",
            value: "Web（部分テンプレート）",
            note: "",
          },
          {
            label: "デザインコンセプト",
            description: `キャラクター Monaqsia（冥炎龍）の世界観を核として、
            深夜の闇と幽冷な水色の発光感をレイアウトデザインに落とし込みました。
            MYFILE と統一した藍紫系カラーパレットを採用し、
            半透明の背景レイヤー・GIF アニメーション背景・box-shadow の発光効果を組み合わせることで、
            神秘的かつダークな雰囲気を強調しております。
            全体のレイアウトは Bootstrap のグリッドシステムを活用した柔軟な構成とし、
            左側にキャラクターイラストの表示エリア、
            右側はタブ切り替えにより自己紹介・好み・DNI などの情報を提示する設計といたしました。
            情報密度と閲覧性の両立を図りつつ、
            Toyhouse の限られたテンプレート環境内において高度にカスタマイズされたビジュアルを実現いたしました。`,
          },
          {
            label: "カラーパレット",
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
            label: "制作上の課題",
            list: [
              {
                text: "Toyhouse プラットフォームにおける CSS の適用範囲が制限されており、プラットフォーム固有のスタイルを直接上書きできない箇所が存在した",
                solution:
                  "各要素に inline style を直接記述するか、詳細度の高いセレクタを用いてカスタムスタイルを強制適用した",
                note: "この経験を通じてプラットフォーム環境の制約を深く理解するとともに、Bootstrap クラスとカスタムスタイルを柔軟に組み合わせる技術を習得した",
              },
            ],
          },
          {
            label: "更新履歴",
            link: {
              text: ["", "デプロイ成果物"],
              href: ["#", "https://toyhou.se/Nokinok"],
              note: "Toyhouse 上のエディタにて開発を行ったため、バージョン履歴は一切保存されておりません",
            },
          },
          {
            label: "使用素材",
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
            label: "ステータス",
            state: ["開発中", "#695e3f"],
          },
          {
            label: "作品種別",
            value: "Webサイト",
            note: "React フレームワーク使用・Vercel にてデプロイ",
          },
          {
            label: "デザインコンセプト",
            description: `深みのあるオリーブグリーン（#43453c）と霞がかった茶色（#d0d9be）を基調カラーとして採用し、
            ブランドの理念である「古法の伝承・純粋な契約栽培」という自然の茶文化の精神を表現いたしました。
            全体のビジュアルは余白を多用したグラデーション重ね合わせの手法に加え、
            全幅の動的背景カルーセルを組み合わせることで、
            静謐な大地の色彩の中に深山の茶園が持つ清澄な雰囲気を醸し出しております。
            フォントには古典的な趣と現代性を兼ね備えた Shippori Mincho B1・LXGW WenKai TC・Noto Serif TC を採用し、
            見出し・ナビゲーション・本文それぞれの役割に応じた階層的な組版を実現し、
            伝統的な茶文化の文字美学を強化しております。
            インタラクションデザインの核には GSAP ScrollTrigger によるスクロール連動アニメーションを据え、
            各セクションがスクロールに応じて順次フェードインすることで、
            茶を点てるような緩やかで落ち着いたリズムを閲覧体験に与えております。
            商品ページにはフィルタリング・ソート機能を実装し、
            クリックで展開する商品詳細ページと組み合わせることで、
            情報密度と閲覧性のバランスを両立させております。`,
          },
          {
            label: "カラーパレット",
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
            label: "制作上の課題",
            list: [
              {
                text: "GSAP ScrollTrigger と React コンポーネントのライフサイクルが競合し、コンポーネントの再レンダリング後にアニメーションが機能しなくなる問題が発生した",
                solution:
                  "GSAP の初期化ロジックを useEffect 内に統一し、gsapSetup.js にてプラグイン登録を一元管理することで、アニメーションがコンポーネントのマウント後に一度だけ実行されるよう制御した",
                note: "この対応を通じて React のレンダリング機構と副作用処理のタイミングへの理解を深めるとともに、再利用可能な GSAP 初期化モジュールを構築した",
              },
              {
                text: "レスポンシブデザインにおいて、ブレークポイントによってはナビゲーションバーとコンテンツエリアが重複・位置ずれする問題が発生した",
                solution:
                  "CSS カスタムプロパティ（--navHeight）によりナビゲーションバーの高さを一元管理し、calc() を用いて各セクションの margin-top を動的に算出。加えて media query にて狭い画面向けのレイアウト調整を実施した",
                note: "この手法により、ナビゲーションバーの高さの参照箇所が単一化され、将来的な変更時の修正コストを大幅に削減することができた",
              },
            ],
          },
          {
            label: "更新履歴",
            link: {
              text: ["バージョン更新履歴", "デプロイ成果物"],
              href: [
                "https://github.com/noxHub1230/teaShop/commits/main/",
                "https://tea-shop-q3tn.vercel.app/",
              ],
            },
          },
          {
            label: "使用素材",
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
    pageTitle: "連絡先",
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
        heading: "その他",
        type: "list",
        items: [
          { label: "携帯電話", value: "0905932786" },
          {
            label: "メールアドレス",
            value: `
            （第一アドレス）35fghu@gmail.com
              （第二アドレス）nokinok0321@gmail.com`,
          },
        ],
      },
    ],
  },
};
