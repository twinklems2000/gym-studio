// Drawer toggle
const hamburger = document.querySelector(".hamburger");
const drawer = document.querySelector(".drawer");
hamburger.addEventListener("click", () => {
  drawer.classList.toggle("open");
});

// Close drawer on link click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    drawer.classList.remove("open");
  });
});

// Highlight active link based on current page
function updateActiveLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const pageMap = {
    "index.html": "Home",
    "program.html": "Program",
    "membership.html": "Membership",
    "contact.html": "Contacts",
  };
  const currentLabel = pageMap[currentPage];
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.textContent === currentLabel) {
      link.classList.add("active");
    }
  });
}

// Run on page load
updateActiveLink();
