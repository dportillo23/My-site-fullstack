const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
}

// Dark Mode
const darkButton = $(".nav__dark");
const navLogo = $(".logo--navigation");
const bigLogo = $(".projects__logo");

const darkModePath = "static/images/Logos/Logo_dark_mode.svg"
const lightModePath = "static/images/Logos/Logo.svg"

function checkIfDarkMode() {
    if (document.body.classList.contains("dark")) {
        darkButton.classList.add("dark");
        navLogo.src = darkModePath;
        bigLogo.src = darkModePath;
    } else {
        darkButton.classList.remove("dark");
        navLogo.src = lightModePath;
        bigLogo.src = lightModePath;
    }
}

checkIfDarkMode();

darkButton.addEventListener("click", e => {
    document.body.classList.toggle("dark");
    checkIfDarkMode();
})


const contactBtn = document.getElementById("contactBtn");




//  Hamburger
const hamburger = $(".hamburger")
const navLinks = $(".nav__list")
const links = $$(".nav__item")

links.forEach(link => {
    link.addEventListener("click", (e) => {
        hamburger.classList.toggle("change");
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle('fade')
        })
    })
})

const pageLinks = $$(".page--link");

pageLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const elementID = e.target.getAttribute("href").substring(1)
        document.querySelector(elementID).scrollIntoView({ 
            behavior: 'smooth' 
          });
    })
})

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");

    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade')
    })
})

// Check Orientation

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

function checkSize() {
    if (window.matchMedia('(min-width: 800px)')) {
        hamburger.classList.remove('change');
    }
}

checkOrientation()
checkSize()
window.addEventListener('resize', () => {
    checkOrientation();
    checkSize()
})

// Projects background images
const projectImages = $$(".project__card");

projectImages.forEach(element => {
    const imageUrl = `static/images/projects/${element.dataset.bg}`;
    element.style.backgroundImage = (`url("${imageUrl}")`);
});

// Sticky bar when scrolling
const navBar = $('.nav');

window.addEventListener('scroll', e => {
    navBar.classList.toggle('sticky', window.scrollY > 70 && !hamburger.classList.contains('change'))
})


// Year
const currentYear = new Date().getFullYear();
$(".year").innerHTML = currentYear;
