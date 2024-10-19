function mobileNav() {
  const navBtnOpen = document.querySelector("#modalOpen");
  const navBtnClose = document.querySelector("#modalClose");
  const navOverlay = document.querySelector("#mobileNavOverlay");
  const nav = document.querySelector("#mobileNav");

  navBtnOpen.onclick = toggleMobileNav;
  navBtnClose.onclick = toggleMobileNav;
  navOverlay.onclick = toggleMobileNav;

  function toggleMobileNav() {
    navOverlay.classList.toggle("mobile-nav-overlay--open");
    nav.classList.toggle("mobile-nav--open");
    document.body.classList.toggle("no-scroll");
  }
}
function loader() {
  const loader = document.querySelector("#loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("loader-wrapper--hidden");
    }, 2000);
  });
}
mobileNav();
loader();

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  parallax: true,
  speed: 1000,
  keyboard: {
    enabled: true,
  },
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },

  // If we need pagination
  pagination: {
    el: ".slider-controls__count",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
