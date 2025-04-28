// Mock Data (equivalent to imported constants)
const gymPrograms = [
  {
    name: "Yoga Flow",
    info: "Experience tranquility and strength with our Yoga Flow program. Perfect for all levels, this class combines mindful breathing, fluid movements, and deep stretches to enhance flexibility, balance, and mental clarity.",
    image: "/images/yoga_flow.jpg",
  },
  {
    name: "Cardio Blast",
    info: "Get your heart pumping with Cardio Blast! This high-energy program includes dynamic workouts like HIIT, cycling, and treadmill sprints to boost cardiovascular health, burn calories, and increase endurance.",
    image: "/images/cardio.jpg",
  },
  {
    name: "Strength Training",
    info: "Build muscle and power with our Strength Training program. Using free weights, resistance bands, and bodyweight exercises, this class is designed to improve strength, tone your body, and enhance overall fitness.",
    image: "/images/strength.jpg",
  },
  {
    name: "Pilates Core",
    info: "Strengthen your core and improve posture with Pilates Core. This low-impact program focuses on controlled movements to enhance core stability, flexibility, and body alignment, suitable for beginners and advanced practitioners.",
    image: "/images/pilates.jpg",
  },
];

const trainerData = [
  {
    name: "John Doe",
    about:
      "Certified fitness coach with 10 years of experience in strength training and nutrition.",
    img: "/images/trainer-john.jpg",
    img2: "/images/trainer_2.jpg",
  },
  {
    name: "Sarah Smith",
    about:
      "Expert in yoga and mindfulness, helping clients achieve balance and flexibility.",
    img: "/images/trainer-sarah.jpg",
    img2: "/images/trainer_1.jpg",
  },
  {
    name: "Mike Johnson",
    about:
      "Specializes in high-intensity interval training (HIIT) and cardio workouts.",
    img: "/images/trainer-mike.jpg",
    img2: "/images/trainer_3.jpg",
  },
];

const scheduleData = [
  { day: "Monday", time: "9:00 AM - 10:00 AM", session: "Full Body Workout" },
  {
    day: "Wednesday",
    time: "6:00 PM - 7:00 PM",
    session: "Strength Training",
  },
  { day: "Friday", time: "8:00 AM - 9:00 AM", session: "Cardio Session" },
];

const programIncludes = [
  "Personalized workout plan",
  "Weekly progress tracking",
  "Access to online resources",
  "Nutrition guide",
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

// Fallback to make elements visible after a delay
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
const programsGrid = document.getElementById("programs-grid");
gymPrograms.forEach((program, index) => {
  const card = document.createElement("div");
  card.className = "program-card scale-in";
  card.style.transitionDelay = `${index * 0.2}s`;
  card.innerHTML = `
<img src="${program.image}" alt="${program.name}" />
<div class="program-card-content">
  <h3>${program.name}</h3>
  <p>${program.info}</p>
</div>
`;
  programsGrid.appendChild(card);
});

// Populate Trainers
const trainersGrid = document.getElementById("trainers-grid");
trainerData.forEach((trainer, index) => {
  const card = document.createElement("div");
  card.className = "trainer-card scale-in";
  card.style.transitionDelay = `${index * 0.2}s`;
  card.innerHTML = `
<img src="${trainer.img2}" alt="${trainer.name}" />
<div class="trainer-card-content">
  <h3>${trainer.name}</h3>
  <p>${trainer.about}</p>
</div>
`;
  trainersGrid.appendChild(card);
});

// Populate Schedule
const scheduleBody = document.getElementById("schedule-body");
scheduleData.forEach((entry, index) => {
  const row = document.createElement("tr");
  row.className = "fade-in-up";
  row.style.transitionDelay = `${index * 0.2}s`;
  row.innerHTML = `
<td>${entry.day}</td>
<td>${entry.time}</td>
<td>${entry.session}</td>
`;
  scheduleBody.appendChild(row);
});

// Populate Includes
const includesList = document.getElementById("includes-list");
programIncludes.forEach((item, index) => {
  const li = document.createElement("li");
  li.className = "fade-in-up";
  li.style.transitionDelay = `${index * 0.2}s`;
  li.textContent = item;
  includesList.appendChild(li);
});

// Observe all animated elements after populating
observeElements(".fade-in-up, .scale-in, .slide-in-right");

// Fallback to ensure visibility
ensureVisibility(".program-card", 3000);
ensureVisibility(".trainer-card", 3000);
ensureVisibility(".includes-list li", 3000);
ensureVisibility(".schedule-table tr", 3000);

// Button Handlers
function addToCart() {
  console.log("Fitness Health added to cart");
}

function joinNow() {
  console.log("Joined Fitness Health");
}
