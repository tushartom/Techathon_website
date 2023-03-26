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