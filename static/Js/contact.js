const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const contactBtn = document.getElementById("contactBtn");

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
}

// Dark Mode
const darkButton = $(".nav__dark");
const navLogo = $(".logo--navigation");

const darkModePath = "static/images/Logos/Logo_dark_mode.svg"
const lightModePath = "static/images/Logos/Logo.svg"

function checkIfDarkMode() {
    if (document.body.classList.contains("dark")) {
        darkButton.classList.add("dark");
        navLogo.src = darkModePath;
    } else {
        darkButton.classList.remove("dark");
        navLogo.src = lightModePath;
    }
}

checkIfDarkMode();

darkButton.addEventListener("click", e => {
    document.body.classList.toggle("dark");
    checkIfDarkMode();
})


function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {

        contactBtn.classList.remove("nav__btn", "btn");
        contactBtn.classList.add("nav__link");

    }
    if (window.matchMedia("(orientation: landscape)").matches) {
        contactBtn.classList.add("nav__btn", "btn");
        contactBtn.classList.remove("nav__link")
    }
}

checkOrientation()
window.addEventListener('resize', checkOrientation)

const windowQuery = window.innerWidth < 800


//  Hamburger
const hamburger = $(".hamburger")
const navLinks = $(".nav__list")
const links = $$(".nav__item")

links.forEach(link => {
    link.addEventListener("click", (e) => {
        hamburger.classList.toggle("change", windowQuery);
        navLinks.classList.toggle("open", windowQuery);
        links.forEach(link => {
            link.classList.toggle('fade', windowQuery)
        })
    })
})

const pageLinks = $$(".page--link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");

    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade')
    })
})

// Sticky bar when scrolling
const navBar = $('.nav');

window.addEventListener('scroll', e => {
    if (window.matchMedia('(max-width: 800px)')) {return}
    navBar.classList.toggle('sticky', window.scrollY > 70)
})

// Year
const currentYear = new Date().getFullYear();
$(".year").innerHTML = currentYear;