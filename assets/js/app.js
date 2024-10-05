console.log("Js is running");

// Function to implement smooth scrolling
function addScroll(event) {
  console.log("Scroll", event);

  // Prevent default behavior
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

  // Add copyright year in html dynamically.
  const copyrightYear = document.querySelector(".copyright-year");
  copyrightYear.textContent = new Date().getFullYear();

  // Add smooth scrolling to each link
  links.forEach((link) => link.addEventListener("click", addScroll));
});
