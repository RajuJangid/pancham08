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

function placeOrder() {
    alert("Your message has been mailed.");
    document.getElementById("F1").value = "";
    document.getElementById("F2").value = "";
    document.getElementById("F3").value = "";
    document.getElementById("F4").value = "";
    document.getElementById("F5").value = "";
}
