(function () {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var closeBtn = document.getElementById("lightbox-close");

  function openLightbox(full, alt) {
    lightboxImg.src = full;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("open");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  // ---- screenshot carousel ----
  var track = document.getElementById("carousel-track");
  var slides = track ? Array.prototype.slice.call(track.children) : [];
  var caption = document.getElementById("carousel-caption");
  var dots = Array.prototype.slice.call(document.querySelectorAll(".carousel-dot"));
  var prevBtn = document.getElementById("carousel-prev");
  var nextBtn = document.getElementById("carousel-next");
  var current = 0;
  var captions = ["Bot Dashboard", "Keys & Binds", "Settings", "Setup & Diagnostics", "Stats & Achievements"];

  function goTo(index) {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;
    track.style.transform = "translateX(-" + current * 100 + "%)";
    dots.forEach(function (dot, i) { dot.classList.toggle("active", i === current); });
    if (caption) caption.textContent = captions[current] || "";
  }

  if (prevBtn) prevBtn.addEventListener("click", function () { goTo(current - 1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { goTo(current + 1); });

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () { goTo(parseInt(dot.getAttribute("data-index"), 10)); });
  });

  slides.forEach(function (slide, i) {
    slide.addEventListener("click", function () {
      if (i !== current) { goTo(i); return; }
      openLightbox(slide.getAttribute("data-full"), slide.getAttribute("data-alt"));
    });
  });

  var carouselEl = document.getElementById("carousel");
  var touchStartX = null;

  if (carouselEl) {
    carouselEl.addEventListener("touchstart", function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    carouselEl.addEventListener("touchend", function (e) {
      if (touchStartX === null) return;
      var delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 40) goTo(current + (delta < 0 ? 1 : -1));
      touchStartX = null;
    });
  }

  goTo(0);

  // ---- hero slideshow ----
  var heroImg = document.getElementById("hero-slideshow-img");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var heroSlides = [
    { src: "screenshots/dashboard.png", alt: "RedruM's Interactive Zombies Tool dashboard showing live stats, chat feed, and game status" },
    { src: "screenshots/keys-and-binds.png", alt: "Keys and Binds panel" },
    { src: "screenshots/settings.png", alt: "Settings tab" },
    { src: "screenshots/setup-diagnostics.png", alt: "Setup and Diagnostics tab" },
    { src: "screenshots/stats.png", alt: "Stats and Achievements tab" },
    { src: "screenshots/setup-wizard.png", alt: "Installer setup wizard" }
  ];

  if (heroImg) {
    var heroIndex = 0;
    var heroTimer = null;

    function showHeroSlide(index) {
      heroIndex = index;
      var slide = heroSlides[heroIndex];

      if (reduceMotion) {
        heroImg.src = slide.src;
        heroImg.alt = slide.alt;
        return;
      }

      heroImg.classList.add("is-fading");
      setTimeout(function () {
        heroImg.src = slide.src;
        heroImg.alt = slide.alt;
        heroImg.classList.remove("is-fading");
      }, 300);
    }

    function startHeroCycle() {
      heroTimer = setInterval(function () {
        showHeroSlide((heroIndex + 1) % heroSlides.length);
      }, 3500);
    }

    startHeroCycle();

    var heroWindow = document.querySelector(".hero-image .window");
    if (heroWindow) {
      heroWindow.addEventListener("mouseenter", function () { clearInterval(heroTimer); });
      heroWindow.addEventListener("mouseleave", startHeroCycle);
    }
  }

  var navToggle = document.getElementById("nav-toggle");
  var navMobile = document.getElementById("nav-links-mobile");

  navToggle.addEventListener("click", function () {
    var open = navMobile.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navMobile.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      navMobile.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Pull the current version from GitHub's latest release instead of relying
  // on the hardcoded fallback text staying in sync by hand. Fails silently —
  // if the API is unreachable or rate-limited, the hardcoded "v2.5.1" text
  // already in the HTML just stays as-is rather than showing an error.
  fetch("https://api.github.com/repos/RedruM-AU/RedruMs_Interactive_Zombies_Tool/releases/latest")
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(function (data) {
      var tag = data && data.tag_name;
      if (!tag) return;
      document.querySelectorAll("#hero-version, #footer-version").forEach(function (el) {
        el.textContent = tag;
      });
    })
    .catch(function () { /* keep the static fallback text */ });
})();
