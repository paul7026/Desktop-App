(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const exitButton = document.querySelector(".header__nav-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  exitButton.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
})();

(function () {
  const scrollDown = document.querySelector(".scroll__button");
  const priceSection = document.querySelector(".price");
  scrollDown.addEventListener("click", () => {
    priceSection.scrollIntoView({
      behavior: "smooth",
    });
  });
})();

(function () {
  const scrollUp = document.querySelector(".footer__on-top");
  const header = document.querySelector(".header");
  scrollUp.addEventListener("click", () => {
    header.scrollIntoView({
      behavior: "smooth",
    });
  });
})();
