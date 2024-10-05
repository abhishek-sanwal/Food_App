console.log("Js is running");
const sectionHeroEl = document.querySelector(".section-hero");
const headerEle = document.querySelector(".header");
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
///////////////////////////////////////////////////////////////////////
// Sticky Navigation
function handleStickyHeader() {
  console.log("Inside");
  const observer = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      console.log(ent);

      // Add sticky header
      if (!ent.isIntersecting) {
        console.log("I have added");
        document.body.classList.add("sticky");
      }
      // Remove sticky header
      else {
        console.log("I have removed");
        document.body.classList.remove("sticky");
      }
    },
    {
      // In the viewport
      root: null,
      threshold: 0,
      // Height of header.
      // It should add before 80px
      rootMargin: "-80px",
    }
  );

  observer.observe(sectionHeroEl);
}

////////////////////////////////////////////////////////////////
// Adding Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Various dom Nodes
  const headerEle = document.querySelector(".header");
  const links = document.querySelectorAll("a:link");
  const sectionHeroEl = document.querySelector(".section-hero");
  // Add copyright year in html dynamically.
  const copyrightYear = document.querySelector(".copyright-year");

  copyrightYear.textContent = new Date().getFullYear();
  handleStickyHeader();
  // Add smooth scrolling to each link
  links.forEach((link) => link.addEventListener("click", addScroll));
});
