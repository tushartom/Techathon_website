const toggleBtn = document.querySelector("#toggle-btn");
const navMenu = document.querySelector("#nav-menu");
const tabsContainer = document.querySelector(".process__tabs-container");
const tabs = document.querySelectorAll(".process__tab");
const tabsContent = document.querySelectorAll(".process__content");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

function showMenu() {
  navMenu.classList.toggle("h-0")
  navMenu.classList.toggle("opacity-0")
}

// toggle btn for mobile menu
toggleBtn.addEventListener("click", showMenu)

// Navigation Links
navMenu.addEventListener("click", function(e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
    // Hide menu after click
    navMenu.classList.add("h-0");
    navMenu.classList.add("opacity-0");
  }
});

// tabs functionality
tabsContainer.addEventListener("click", function(e) {
  const clicked = e.target.closest(".process__tab");
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove("active"));
  tabsContent.forEach(c => c.classList.remove("process__content-active"));

  clicked.classList.add("active");
  document.querySelector(`.process__content--${clicked.dataset.tab}`).classList.add("process__content-active");
})

const questions = document.querySelectorAll(".single-faq")
questions.forEach(question => {
  const questionBtn = question.querySelector(".faq-btn")
  const questionContent = question.querySelector(".faq-content")
  questionBtn.addEventListener("click", () => {
    questionContent.classList.toggle("hidden")
  })
})


const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
})

headerObserver.observe(header);

// reveal sections 

const sections = document.querySelectorAll(".section");

const revealSection = function(entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})

sections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add("section__hidden");
})
