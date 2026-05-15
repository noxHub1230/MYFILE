function createLoadingBar() {
  const loadingContainer = document.createElement("div"); // 創建loading時的全屏容器
  loadingContainer.className = "loadingContainer"; // 定義其class為loadingContainer

  const loadingBar = document.createElement("div"); // 創建loading條的容器
  loadingBar.className = "loadingBar"; // 定義其class為loadingBar

  const loadingPercentage = document.createElement("div"); // 創建同步顯示loading進度的文字元素
  loadingPercentage.className = "loadingPercentage"; // 定義其class為loadingPercentage
  loadingPercentage.textContent = "0%"; // 設定初始文字內容

  const loadingProgress = document.createElement("div"); // 創建loading當前進度條
  loadingProgress.className = "loadingProgress"; // 定義其class為loadingProgress
  loadingProgress.style.width = "0%"; // 設定初始寬度為0%

  document.body.appendChild(loadingContainer); // 在body中新增一個子節點給loadingContainer(父子節點關係設定)
  loadingContainer.appendChild(loadingBar); // 在loadingContainer中新增一個子節點給loadingBar(父子節點關係設定)
  loadingBar.appendChild(loadingProgress); // 在loadingBar中新增一個子節點給loadingProgress(父子節點關係設定)
  loadingContainer.appendChild(loadingPercentage); // 在loadingContainer中新增一個子節點給loadingPercentage(父子節點關係設定)

  return { loadingContainer, loadingProgress, loadingPercentage };
}

document.addEventListener("DOMContentLoaded", () => {
  const { loadingContainer, loadingProgress, loadingPercentage } =
    createLoadingBar();

  let totalAssets = 0;
  let loadedAssets = 0;
  let isWindowLoaded = false;
  let isFinished = false;
  const trackedAssets = new Set();

  // 更新畫面進度
  const updateUI = () => {
    if (isFinished) return;

    let percent = 0;
    if (totalAssets === 0) {
      percent = isWindowLoaded ? 100 : 0;
    } else {
      percent = (loadedAssets / totalAssets) * 100;
    }

    // 確保進度條平滑且不回退
    const currentWidth = parseFloat(loadingProgress.style.width) || 0;
    let newWidth = Math.max(currentWidth, percent);

    // 在所有東西準備好前，最高只顯示到 99%
    if (!isWindowLoaded || loadedAssets < totalAssets) {
      newWidth = Math.min(newWidth, 99);
    }

    loadingProgress.style.width = `${newWidth}%`;
    loadingPercentage.textContent = `${Math.round(newWidth)}%`;

    if (loadedAssets >= totalAssets && isWindowLoaded) {
      finishLoading();
    }
  };

  // 標記資源已載入
  const markAsLoaded = () => {
    loadedAssets++;
    updateUI();
  };

  // 針對背景圖片等 URL 進行獨立追蹤
  const trackUrl = (url) => {
    if (!url || trackedAssets.has(url)) return;
    trackedAssets.add(url);
    totalAssets++;

    const img = new Image();
    img.onload = markAsLoaded;
    img.onerror = markAsLoaded; // 錯誤也當作載入完畢，避免卡住
    img.src = url;
  };

  // 檢查 DOM 元素是否包含需要載入的資源
  const trackElement = (el) => {
    if (!el || trackedAssets.has(el)) return;

    if (el.tagName && el.tagName.toLowerCase() === "img") {
      trackedAssets.add(el);
      totalAssets++;
      if (el.complete) {
        markAsLoaded();
      } else {
        el.addEventListener("load", markAsLoaded, { once: true });
        el.addEventListener("error", markAsLoaded, { once: true });
      }
    } else if (el.tagName && el.tagName.toLowerCase() === "video") {
      trackedAssets.add(el);
      totalAssets++;
      if (el.readyState >= 3) {
        markAsLoaded();
      } else {
        el.addEventListener("canplay", markAsLoaded, { once: true });
        el.addEventListener("error", markAsLoaded, { once: true });
      }
    }

    // 檢查 inline background-image
    if (el.style && el.style.backgroundImage) {
      const match = el.style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/i);
      if (match) trackUrl(match[1]);
    }
  };

  // 1. 抓取目前頁面上的 img, video 與帶有行內背景圖的元素
  document.querySelectorAll("*").forEach(trackElement);

  // 2. 監控後續動態加入的 DOM (例如透過 JS render 出來的圖片或背景圖)
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // 確保是 Element node
            trackElement(node);
            node.querySelectorAll?.("*").forEach(trackElement);
          }
        });
      } else if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        trackElement(mutation.target);
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style"],
  });

  // 結束 loading 畫面的流程
  const finishLoading = () => {
    if (isFinished) return;
    isFinished = true;

    loadingProgress.style.width = "100%";
    loadingPercentage.textContent = "100%";

    setTimeout(() => {
      loadingContainer.style.opacity = "0";
      loadingContainer.style.transition = "opacity 0.3s";
      setTimeout(() => {
        if (loadingContainer.parentNode) {
          document.body.removeChild(loadingContainer);
        }
        observer.disconnect(); // 任務完成，關閉監控
        startPageAnimations();
      }, 300);
    }, 500);
  };

  // 3. 監聽 window 的 load 事件 (確保基礎架構與 CSS 解析完畢)
  window.addEventListener("load", () => {
    isWindowLoaded = true;
    updateUI();

    // 防呆機制：如果某些資源莫名卡住沒觸發事件，load 事件後強制結束
    setTimeout(() => {
      if (!isFinished) finishLoading();
    }, 500);
  });

  // 最大超時限制：如果網路太慢或資源異常，最長 10 秒後強制進入畫面
  setTimeout(() => {
    if (!isFinished) {
      console.warn("Loading timeout, forcing completion.");
      isWindowLoaded = true;
      loadedAssets = totalAssets;
      finishLoading();
    }
  }, 10000);
});

// 添加新的啟動動畫函數
function startPageAnimations() {
  const animatedElements = document.querySelectorAll(
    ".titleArea, .titleArea h1, .titleArea h4, .line, .navArea, .navArea a",
  );
  animatedElements.forEach((element) => {
    element.classList.add("animation-ready");
  });
}
