// <!-- JAI SHREE RAM -->

// _____Typing animation_____//
var typed = new Typed(".typing", {
    strings: ["Web-Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
// _____Aside color change aur function_____//
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");

        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideTogglerBtn()
        }
    })

}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");

}
const navTogglerBtn = document.querySelector(".navToggler"),
    aside = document.querySelector(".aside"),
    navTogglerI= document.querySelector("#navTooglerI");
navTogglerBtn.addEventListener("click", () => {
    asideTogglerBtn();
})
function asideTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    if(navTogglerI.classList.contains("fa-bars")){
        navTogglerI.classList.remove("fa-bars");
        navTogglerI.classList.add("fa-times");
    }
    else{
        navTogglerI.classList.remove("fa-times");
        navTogglerI.classList.add("fa-bars");

    }
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }

}