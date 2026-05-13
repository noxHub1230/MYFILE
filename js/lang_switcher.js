/**
 * lang_switcher.js
 * 語言切換共用模組
 * 支援語言：TW（繁體中文）、JP（日文）
 */

const LANG_KEY = "preferred_lang";
const LANGS = ["TW", "JP"];

// 取得目前語言（預設 TW）
function getCurrentLang() {
  return localStorage.getItem(LANG_KEY) || "TW";
}

// 切換並儲存語言，然後重新載入頁面
function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  location.reload();
}

// 動態載入對應語言的 data 檔，載入完畢後執行 callback
function loadData(callback) {
  const lang = getCurrentLang();
  const script = document.createElement("script");
  script.src = `./js/data_${lang.toLowerCase()}.js`;
  script.onload = () => {
    const DATA = lang === "TW" ? DATA_TW : DATA_JP;
    callback(DATA, lang);
  };
  document.head.appendChild(script);
}

// 在指定容器內建立語言切換按鈕群組
function renderLangSwitcher(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const current = getCurrentLang();
  const wrapper = document.createElement("div");
  wrapper.className = "langSwitcher";

  LANGS.forEach((lang, i) => {
    if (i > 0) {
      const sep = document.createElement("span");
      sep.className = "langSep";
      sep.textContent = "/";
      wrapper.appendChild(sep);
    }

    const btn = document.createElement("button");
    btn.textContent = lang;
    btn.className = "langBtn" + (lang === current ? " langBtn--active" : "");
    btn.setAttribute("aria-pressed", lang === current ? "true" : "false");
    btn.addEventListener("click", () => {
      if (lang !== getCurrentLang()) setLang(lang);
    });
    wrapper.appendChild(btn);
  });

  container.appendChild(wrapper);
}
