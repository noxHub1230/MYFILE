/**
 * nav.js
 * 共用導覽列模組
 *
 * 根據當前頁面自動判斷：
 *   - index.html  → home  模式（無 navTitle、排除 home 自身）
 *   - 其他頁面   → inner 模式（有 navTitle、排除當前頁）
 *
 * 使用方式：
 *   renderNav(nav, "works");   // 傳入 nav 資料與當前頁 key
 */

/**
 * 渲染導覽列連結（排除當前頁）
 * @param {Object}   nav         - data_*.js 中的 nav 物件
 * @param {string}   currentKey  - 當前頁的 key（"home" | "intro" | "works" | "contact"）
 * @param {string}   containerId - 要填入連結的容器 id
 */
function renderNavLinks(nav, currentKey, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const allKeys = ["home", "intro", "works", "contact"];
  allKeys
    .filter(key => key !== currentKey)
    .forEach(key => {
      const a = document.createElement("a");
      a.href        = nav.links[key].href;
      a.textContent = nav.links[key].label;
      container.appendChild(a);
    });

  renderLangSwitcher(containerId);
}

/**
 * 渲染 home 頁導覽列（放在 #home-nav，無 navTitle）
 * @param {Object} nav - data_*.js 中的 nav 物件
 */
function renderHomeNav(nav) {
  renderNavLinks(nav, "home", "home-nav");
}

/**
 * 渲染 inner 頁導覽列（放在 .navigator，含 navTitle）
 * @param {Object} nav        - data_*.js 中的 nav 物件
 * @param {string} currentKey - 當前頁的 key
 * @param {string} navId      - navArea 容器的 id
 */
function renderInnerNav(nav, currentKey, navId) {
  const titleEl = document.getElementById("nav-site-title");
  if (titleEl) titleEl.textContent = nav.siteTitle;
  renderNavLinks(nav, currentKey, navId);
}
