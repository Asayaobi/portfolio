//responsive nav bar
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle")
    const menuClose = document.getElementById("menu-close")
    const menuDialog = document.getElementById("menu-dialog")
    const menuOverlay = document.getElementById("menu-overlay")
    const menuLinks = menuDialog.querySelectorAll("a")
  
    const openMenu = () => {
      menuDialog.classList.remove("hidden")
      menuOverlay.classList.remove("hidden")
      menuDialog.setAttribute("data-state", "open")
      menuOverlay.setAttribute("data-state", "open")
    };
  
    const closeMenu = () => {
      menuDialog.classList.add("hidden")
      menuOverlay.classList.add("hidden")
      menuDialog.setAttribute("data-state", "closed")
      menuOverlay.setAttribute("data-state", "closed")
    };
  
    // Open menu when toggle button is clicked
    menuToggle.addEventListener("click", openMenu)
  
    // Close menu when close button is clicked
    menuClose.addEventListener("click", closeMenu)
  
    // Close menu when a menu link is clicked
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu()
      })
    })
  
    // Close menu if the overlay is clicked
    menuOverlay.addEventListener("click", closeMenu)
  })
  

// footer
const thisYear = new Date().getFullYear()
document.querySelector("#year").textContent = thisYear
