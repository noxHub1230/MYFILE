/**
 * nav.js
 * 共用導覽列模組
 *
 * RWD 漢堡選單說明：
 *   - 行動端（≤768px）才顯示漢堡按鈕，桌面端完全隱藏（display:none!important）
 *   - inner 頁：漢堡按鈕 append 至 .navigator 最右端
 *   - home  頁：漢堡按鈕 append 至 .videoContainer（fixed 右上角）
 *   - 漢堡圖示由 .burger-bar + ::before + ::after 組成
 *   - 開啟：::before 透明、bar rotate(45deg)、::after rotate(-90deg) → 叉叉
 *   - 再點 → 復原
 */

/**
 * 建立漢堡按鈕並綁定開關邏輯
 * @param {string} navAreaId - 對應的 navArea 容器 id
 * @returns {HTMLButtonElement}
 */
function createBurgerBtn(navAreaId) {
  const btn = document.createElement("button");
  btn.className = "burger-btn";
  btn.setAttribute("aria-label", "Toggle navigation");
  btn.setAttribute("aria-expanded", "false");

  const bar = document.createElement("div");
  bar.className = "burger-bar";
  btn.appendChild(bar);

  btn.addEventListener("click", () => {
    const isOpen = btn.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
    const navArea = document.getElementById(navAreaId);
    if (navArea) navArea.classList.toggle("nav-open", isOpen);
  });

  return btn;
}

/**
 * 渲染導覽列連結（排除當前頁）
 */
function renderNavLinks(nav, currentKey, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const allKeys = ["home", "intro", "works", "contact"];
  allKeys
    .filter((key) => key !== currentKey)
    .forEach((key) => {
      const a = document.createElement("a");
      a.href = nav.links[key].href;
      a.textContent = nav.links[key].label;
      // 點連結時收起行動選單
      a.addEventListener("click", () => {
        const btn = document.querySelector(".burger-btn");
        if (btn && btn.classList.contains("is-open")) {
          btn.classList.remove("is-open");
          btn.setAttribute("aria-expanded", "false");
          container.classList.remove("nav-open");
        }
      });
      container.appendChild(a);
    });

  renderLangSwitcher(containerId);
}

/**
 * 渲染 home 頁導覽列
 * 漢堡按鈕掛在 .videoContainer（fixed 右上角，CSS 控制）
 */
function renderHomeNav(nav) {
  renderNavLinks(nav, "home", "home-nav");

  // 掛到 .videoContainer，讓 CSS 用 .videoContainer > .burger-btn 定位
  const videoContainer = document.querySelector(".videoContainer");
  if (!videoContainer) return;
  const burger = createBurgerBtn("home-nav");
  videoContainer.appendChild(burger);
}

/**
 * 渲染 inner 頁導覽列
 * 漢堡按鈕 append 至 .navigator 最末端（flex 最右側）
 */
function renderInnerNav(nav, currentKey, navId) {
  const titleEl = document.getElementById("nav-site-title");
  if (titleEl) titleEl.textContent = nav.siteTitle;
  renderNavLinks(nav, currentKey, navId);

  const navigator = document.querySelector(".navigator");
  if (!navigator) return;
  const burger = createBurgerBtn(navId);
  navigator.appendChild(burger);
}
