/**
 * carousel_intro.js
 * - `.reveal` elements: IntersectionObserver scroll-reveal (unchanged).
 * - `.showcase` elements: GSAP ScrollTrigger horizontal slide-in.
 * - `[data-parallax]` elements: subtle Y-shift on scroll.
 */
document.addEventListener("DOMContentLoaded", () => {
  /* ── Scroll-reveal via IntersectionObserver (non-showcase) ── */
  function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    reveals.forEach((el) => observer.observe(el));
  }

  window.initScrollReveal = initScrollReveal;
  initScrollReveal();

  /* ── GSAP ScrollTrigger: showcase horizontal slide-in ── */
  function initShowcaseGSAP() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined")
      return;

    gsap.registerPlugin(ScrollTrigger);

    const showcases = document.querySelectorAll(".showcase");
    if (!showcases.length) return;

    showcases.forEach((el) => {
      const isRight = el.classList.contains("showcase--right");
      // Right-aligned image → slides from +120px (right side)
      // Left-aligned image  → slides from -120px (left side)
      const xStart = isRight ? 120 : -120;

      gsap.set(el, { visibility: "visible", opacity: 0, x: xStart });

      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          // Match original timing: threshold 0.12 + rootMargin bottom -60px
          start: "top bottom-=60px",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Overlay animation for .showcase-image::before — fade in opacity 0→1
      const imgEl = el.querySelector(".showcase-image");
      if (imgEl) {
        gsap.set(imgEl, { "--before-opacity": 0 });
        gsap.to(imgEl, {
          "--before-opacity": 1,
          duration: 1.2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgEl,
            start: "bottom 60%",
            end: "bottom top",
            toggleActions: "play none none none",
            scrub: true,
          },
        });
      }
    });
    const selfBanner = document.querySelector("#selfBanner");
    if (selfBanner) {
      gsap.set(selfBanner, { backgroundSize: "100%" });
      gsap.to(selfBanner, {
        backgroundSize: "200%",
        duration: 1.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: selfBanner,
          start: "bottom 40%",
          end: "bottom top",
          toggleActions: "play none none none",
          scrub: true,
        },
      });
    }
  }

  window.initShowcaseGSAP = initShowcaseGSAP;
  initShowcaseGSAP();

  /* ── Subtle parallax on [data-parallax] images ── */
  function initParallax() {
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const parallaxEls = document.querySelectorAll("[data-parallax]");

        parallaxEls.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const viewH = window.innerHeight;

          if (rect.bottom < -200 || rect.top > viewH + 200) return;

          const progress = (rect.top + rect.height / 2) / viewH;
          const offset = (progress - 0.5) * 30;
          el.style.transform = `translateY(${offset}px)`;
        });

        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  initParallax();
});
