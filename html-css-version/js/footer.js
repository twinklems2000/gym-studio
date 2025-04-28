// Intersection Observer for Animations
const observerOptions = {
  root: null,
  rootMargin: "-50px", // Adjusted for better detection
  threshold: 0.1,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
// Observe Elements
function observeElements(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    observer.observe(el);
  });
}
// Fallback to Ensure Visibility
function ensureVisibility(selector, delay = 2000) {
  setTimeout(() => {
    document.querySelectorAll(selector).forEach((el) => {
      if (!el.classList.contains("visible")) {
        el.classList.add("visible");
      }
    });
  }, delay);
}
// Button Handler
function goToOnlineCourse() {
  console.log("Navigating to Online Course");
  // window.location.href = '/online-course'; // Uncomment for navigation
}
// Initialize
document.addEventListener("DOMContentLoaded", () => {
  observeElements(".fade-in-up");
  ensureVisibility(".fade-in-up", 2000);
});
