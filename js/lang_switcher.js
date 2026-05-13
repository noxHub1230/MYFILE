/**
 * lang_switcher.js
 * 語言切換共用模組
 * 支援語言：TW（繁體中文）、JP（日文）
 */

const LANG_KEY = "preferred_lang";
const LANGS = [
  { code: "TW", label: "繁體中文" },
  { code: "JP", label: "日本語" },
];

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

// 在指定容器內建立語言切換 dropdown
function renderLangSwitcher(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const current = getCurrentLang();

  // 外層 wrapper
  const dropdown = document.createElement("div");
  dropdown.className = "dropdown langDropdown";

  // 觸發按鈕（globe icon）
  const toggle = document.createElement("button");
  toggle.className = "langDropdownToggle";
  toggle.setAttribute("data-bs-toggle", "dropdown");
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = `<i class="bi bi-globe2"></i>`;
  dropdown.appendChild(toggle);

  // 下拉選單
  const menu = document.createElement("ul");
  menu.className = "dropdown-menu langDropdownMenu";
  menu.id = "navlang";

  LANGS.forEach(({ code, label }) => {
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "lang";
    input.id = `lang-${code.toLowerCase()}`;
    input.className = "langRadio";
    input.checked = code === current;
    input.addEventListener("change", () => {
      if (code !== getCurrentLang()) setLang(code);
    });

    const labelEl = document.createElement("label");
    labelEl.htmlFor = `lang-${code.toLowerCase()}`;
    labelEl.className =
      "langRadioLabel" + (code === current ? " langRadioLabel--active" : "");
    labelEl.textContent = label;

    li.appendChild(input);
    li.appendChild(labelEl);
    menu.appendChild(li);
  });

  dropdown.appendChild(menu);
  container.appendChild(dropdown);
}
