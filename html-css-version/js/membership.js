// Mock Membership Data
const membershipData = [
  {
    title: "Full Body Workout (Group Classes)",
    description:
      "A comprehensive group workout to improve strength and endurance.",
    price: 99,
    duration: "30 days",
    type: "Group Classes",
    image: "/images/workout.jpg",
  },
  {
    title: "Personal Training Session",
    description:
      "One-on-one training with a certified coach tailored to your goals.",
    price: 199,
    duration: "45 days",
    type: "Personal Training",
    image: "/images/personal_training.jpg",
  },
  {
    title: "Online Yoga Classes",
    description:
      "Join our virtual yoga sessions to improve flexibility and reduce stress.",
    price: 49,
    duration: "15 days",
    type: "Online",
    image: "/images/online_yoga.jpg",
  },
  {
    title: "HIIT Group Classes",
    description:
      "High-intensity interval training in a group setting for maximum results.",
    price: 129,
    duration: "30 days",
    type: "Group Classes",
    image: "/images/group_classes.jpg",
  },
  {
    title: "Online Strength Training",
    description:
      "Virtual strength training program to build muscle and improve fitness.",
    price: 79,
    duration: "20 days",
    type: "Online",
    image: "/images/strength_training.jpg",
  },
];

// Intersection Observer for Animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
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

// Function to observe elements
function observeElements(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    observer.observe(el);
  });
}

// Fallback to ensure visibility
function ensureVisibility(selector, delay = 3000) {
  setTimeout(() => {
    document.querySelectorAll(selector).forEach((el) => {
      if (!el.classList.contains("visible")) {
        el.classList.add("visible");
      }
    });
  }, delay);
}

// Populate Programs
function renderPrograms(programs) {
  const programsGrid = document.getElementById("programs-grid");
  programsGrid.innerHTML = ""; // Clear existing content
  programs.forEach((program, index) => {
    const card = document.createElement("div");
    card.className = "program-card scale-in";
    card.style.transitionDelay = `${index * 0.2}s`;
    card.innerHTML = `
  <img src="${program.image}" alt="${program.title}" />
  <div class="program-card-content">
    <h3>${program.title}</h3>
    <p>${program.description}</p>
    <p class="price">Price: $${program.price}</p>
    <p>Duration: ${program.duration}</p>
    <button class="btn" onclick="addToCart('${program.title}')">Add to Cart</button>
  </div>
`;
    programsGrid.appendChild(card);
  });
  // Observe newly added elements
  observeElements(".program-card");
  ensureVisibility(".program-card", 3000);
}

// Filter Programs
function filterPrograms() {
  const filterType = document.getElementById("filter-type").value;
  const filteredPrograms =
    filterType === "All"
      ? membershipData
      : membershipData.filter((program) => program.type === filterType);
  renderPrograms(filteredPrograms);
}

// Button Handlers
function addToCart(title) {
  console.log(`${title} added to cart`);
}

function becomeVIP() {
  console.log("Become a VIP clicked");
}

// Initial Render
renderPrograms(membershipData);

// Observe Initial Elements
observeElements(".fade-in-up, .fade-in-left");
ensureVisibility(".fade-in-up, .fade-in-left", 3000);
