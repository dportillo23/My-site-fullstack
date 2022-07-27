if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
}

// Dark Mode
const darkButton = document.querySelector(".nav__dark");
const navLogo = document.querySelector(".logo--navigation");
const bigLogo = document.querySelector(".projects__logo");

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


//  Hamburger
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav__list")
const links = document.querySelectorAll(".nav__item")

links.forEach(link => {
    link.addEventListener("click", (e) => {
        hamburger.classList.toggle("change");
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle('fade')
        })
    })
})

const pageLinks = document.querySelectorAll(".page--link");

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

// Projects background images
const projectImages = document.querySelectorAll(".project__card");

projectImages.forEach(element => {
    const imageUrl = `static/images/projects/${element.dataset.bg}`;
    element.style.backgroundImage = (`url("${imageUrl}")`);
});


// Year
const currentYear = new Date().getFullYear();
document.querySelector(".year").innerHTML = currentYear;
