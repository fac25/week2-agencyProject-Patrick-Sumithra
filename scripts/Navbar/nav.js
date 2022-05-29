//=======================================================================================
// Header Navigation Bar Script
//=======================================================================================

const navIcon = document.querySelector(".header__bar__icon");
navIcon.addEventListener("click", toggleNavbar);

//=======================================================================================
// Toggle between adding and removing the "responsive" class to header__nav when the user 
// clicks on the header__bar__icon.
//=======================================================================================
function toggleNavbar() {

    let x = document.getElementById("navbar");

    if (x.className === "header__nav") {
      x.className += " responsive";
    } else {
      x.className = "header__nav";
    }
}

