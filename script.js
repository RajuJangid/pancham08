let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let raju = document.querySelector(".hresp");
let jangid = document.querySelector(".vresp");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    raju.classList.toggle("active");
    jangid.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    raju.classList.remove("active");
    jangid.classList.remove("active");
}))
