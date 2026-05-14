/**
 * lang_detect.js
 * 瀏覽器語言預判模組
 *
 * 規則：
 *   - 日文（ja）          → JP
 *   - 其他所有語言         → TW
 *
 * 使用方式：
 *   在 lang_switcher.js 之前載入此檔，
 *   <script src="./js/lang_detect.js"></script>
 *   <script src="./js/lang_switcher.js"></script>
 *
 * 邏輯：
 *   只在 localStorage 尚無使用者手動選擇紀錄時才介入，
 *   避免覆蓋使用者自己切換過的偏好。
 */

(function () {
  const LANG_KEY = "preferred_lang";

  // 已有手動設定就不改動
  if (localStorage.getItem(LANG_KEY)) return;

  // navigator.languages 是陣列（依優先序排列），fallback 到 navigator.language
  const browserLangs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || ""];

  // 取第一個有效語言標籤，轉小寫後取主標籤（"ja-JP" → "ja"）
  const primary = (browserLangs[0] || "").toLowerCase().split("-")[0];

  const detected = primary === "ja" ? "JP" : "TW";

  localStorage.setItem(LANG_KEY, detected);
})();
