// Mock data for fitness and trainers
const fitnessData = [
  { name: "Yoga", img: "/images/41574154e8d3f8679c91806423cdbb69.jpg" },
  { name: "Health", img: "/images/c3b98c22a2568cfaa62856e249804017.jpg" },
  { name: "Fitness", img: "/images/471c2a2459d16cad14f28f5acbb4be05.jpg" },
];

const trainerData = [
  {
    name: "John Doe",
    img: "/images/trainer-john.jpg",
    about: "Certified trainer with 10 years of experience.",
  },
  {
    name: "Jane Smith",
    img: "/images/trainer-sarah.jpg",
    about: "Specializes in yoga and mindfulness.",
  },
  {
    name: "Mike Brown",
    img: "/images/trainer-mike.jpg",
    about: "Expert in strength training.",
  },
];

// Render Fitness Programs
const fitnessContainer = document.getElementById("fitness-programs");
fitnessData.forEach((program, index) => {
  const card = document.createElement("div");
  card.className = "grid-item animate";
  card.style.transitionDelay = `${index * 0.2}s`;
  card.innerHTML = `
      <div class="card">
        <img src="${program.img}" alt="${program.name}_img" />
        <div class="card-content">
          <h3>${program.name}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    `;
  fitnessContainer.appendChild(card);
});

// Render Trainers
const trainerContainer = document.getElementById("trainers");
trainerData.forEach((trainer, index) => {
  const card = document.createElement("div");
  card.className = "grid-item animate-scale";
  card.style.transitionDelay = `${index * 0.2}s`;
  card.innerHTML = `
      <div class="card trainer-card">
        <img src="${trainer.img}" alt="${trainer.name}_img" />
        <div class="card-content">
          <h3>${trainer.name}</h3>
          <p>${trainer.about}</p>
        </div>
      </div>
    `;
  trainerContainer.appendChild(card);
});

// Intersection Observer for Animations
const observerHome = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observerHome.unobserve(entry.target); // Unobserve after animation
      }
    });
  },
  { threshold: 0.1 }
);

// Observe all animatable elements
document
  .querySelectorAll(".animate, .animate-scale, .animate-slide-right, .welcome-fitness-text, .welcome-text, .why-choose-text, .why-choose-image")
  .forEach((el) => {
    observerHome.observe(el);
  });

// Toast Simulation (if needed)
function showToast() {
  alert("Congratulations on joining 🎉");
}

// Navigation Simulation
function navigateToProgram() {
  window.location.href = "/program.html"; // Replace with actual navigation logic
}

// Footer function (if defined in footer.js)
function goToOnlineCourse() {
  window.location.href = "/online-courses"; // Replace with actual navigation logic
}