const toggleBtn = document.querySelector("#toggle-btn")
navMenu = document.querySelector("#nav-menu")

toggleBtn.addEventListener("click", showMenu)
// Show menu
function showMenu() {
  navMenu.classList.toggle("h-0")
  navMenu.classList.toggle("opacity-0")
}
// Hide menu when click on link
const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach(navLink => {
  navLink.addEventListener("click", ()=> {
    // console.log("clicked")
    navMenu.classList.add("h-0")
    navMenu.classList.add("opacity-0")
  })
})

const tabButtons = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".tab-content")
// console.log(tabButtons[0])
tabButtons.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {
    const tabContainer = document.querySelector(".tab-container")
    const tabNumber = tabBtn.dataset.forTab
    const tabContent = tabContainer.querySelector(`.tab-content[data-tab="${tabNumber}"`)
    
    for (i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }
    for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
    tabContent.style.display = "block";
    tabBtn.className += " active";
  })
})

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


const questions = document.querySelectorAll(".single-faq")
questions.forEach(question => {
  const questionBtn = question.querySelector(".faq-btn")
  const questionContent = question.querySelector(".faq-content")
  questionBtn.addEventListener("click", () => {
    questionContent.classList.toggle("hidden")
  })
})

document.querySelector("#nav-menu").addEventListener("click", function(e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    // console.log(e.target);
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
  }
});
