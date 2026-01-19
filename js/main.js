document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ main.js loaded");

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // War day counter (UTC-safe)
  const warDayEl = document.getElementById("warDayNumber");
  if (warDayEl) {
    const warStartUTC = Date.UTC(2022, 1, 24);
    const now = new Date();
    const todayUTC = Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate()
    );
    const days = Math.floor((todayUTC - warStartUTC) / (24 * 60 * 60 * 1000));
    warDayEl.textContent = String(days);
  }

  // Mobile menu toggle
  const menuBtn = document.querySelector(".menu-btn");
  const mainNav = document.querySelector(".main-nav");
  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
    });
  }


  
  // ---- HERO VIDEO MASK REVEAL ----
   // ---- HERO VIDEO MASK REVEAL (ALL AT ONCE, LUMINANCE MASK for MP4) ----

const overlayTiles = document.querySelectorAll(".hero-overlay-tile");
  if (overlayTiles.length) {
    const WAIT_BEFORE_START = 1000; // 2 seconds
    const STAGGER = 500; // 0.5 seconds between tiles

    // Sort by data-order (1,2,3,4)
    const tilesSorted = Array.from(overlayTiles).sort((a, b) => {
      return Number(a.dataset.order) - Number(b.dataset.order);
    });

    setTimeout(() => {
      tilesSorted.forEach((tile, index) => {
        setTimeout(() => {
          tile.classList.add("is-revealed");
        }, index * STAGGER);
      });
    }, WAIT_BEFORE_START);
  }

});



