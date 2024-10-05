console.log("Js is running");

function addScroll(event) {
  console.log("Scroll", event);
  event.preventDefault();

  const href = this.getAttribute("href");

  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (href !== "#" && href.startsWith("#")) {
    const node = document.querySelector(href);
    node.scrollIntoView({ behavior: "smooth" });
  }

  // Remove mobile navbar
  if (this.classList.contains("main-nav-list")) {
    headerEle.classList.toggle("nav-open");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const headerEle = document.querySelector(".header");
  const links = document.querySelectorAll("a:link");

  links.forEach((link) => link.addEventListener("click", addScroll));
});
