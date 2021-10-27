const contactBtn = document.getElementById("contactBtn");

function checkOrientation () {
    if (window.matchMedia("(orientation: portrait)").matches)
    {
    
        contactBtn.classList.remove("nav__btn", "btn");
        contactBtn.classList.add("nav__link");
    
    } 
    if (window.matchMedia("(orientation: landscape)").matches)
    {
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
        console.log(e)
        hamburger.classList.toggle("change");
        navLinks.classList.toggle("open");
        links.forEach(link => {
        link.classList.toggle('fade')
        })
    })
})

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("change");
    
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade')
    })
})

const currentYear = new Date().getFullYear();
document.querySelector(".year").innerHTML = currentYear;




