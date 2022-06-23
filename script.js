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

function placeOrder(){
    alert("Your message has been mailed");
}

let placeOrder = document.getElementById('placeOrder');

placeOrder.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  let inputs = document.querySelectorAll('.D14, .D15, .D16, .D17, .D18');

  inputs.forEach(input => {
    input.value = '';
  });
});

