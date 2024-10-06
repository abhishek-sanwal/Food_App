console.log("Js is running");

// Various dom Nodes
const copyrightYear = document.querySelector(".copyright-year");
const sectionHeroEl = document.querySelector(".section-hero");
const headerEle = document.querySelector(".header");
const links = document.querySelectorAll("a:link");

// Mobile Navigation Menu button
const menuButton = document.querySelector(".mobile-nav-icon");

// Function to implement smooth scrolling
function addScroll(event) {
  console.log("Scroll", event);

  // Prevent default behavior
  event.preventDefault();

  // Get href attribute value
  const href = this.getAttribute("href");

  // If link goes to the top of webpage
  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // If link refers to a section
  if (href !== "#" && href.startsWith("#")) {
    const node = document.querySelector(href);
    node.scrollIntoView({ behavior: "smooth" });
  }
  console.log("Button clicked", this);
  // Remove mobile navbar
  if (this.classList.contains("main-nav-links")) {
    console.log("closed");
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
  copyrightYear.textContent = new Date().getFullYear();
  // handleStickyHeader();
  // Add smooth scrolling to each link
  links.forEach((link) => link.addEventListener("click", addScroll));
  menuButton.addEventListener("click", (event) => {
    console.log("event triggered");
    headerEle.classList.toggle("nav-open");
  });
});
