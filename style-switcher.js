// <!-- JAI SHREE RAM -->

// _____toggle style switcher_____//
const styleSwitcherToggle = document.querySelector(".styleSwitcherToggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".styleSwitcher").classList.toggle("open");
})
// Hide style Switcher on scroll//

window.addEventListener("scroll", () => {
    if (document.querySelector(".styleSwitcher").classList.contains("open")) {
        document.querySelector(".styleSwitcher").classList.remove("open");
    }
})
// _____theme color chnage karna hai_____//
const altStyle = document.querySelectorAll(".altStyle");
function setActiveStyle(color) {
    altStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");

        }
    })
}
// _____Dark mode Light mode chnage karna hai_____//

const dayNight = document.querySelector(".dayNight");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");

    }
})