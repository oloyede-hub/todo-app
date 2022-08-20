import "./style.css";



const navbar = document.querySelector('[data-navbar]');
const content = document.querySelector('[data-content]');
const toggleBtn = document.querySelector('[data-toggle-navbar-btn]');

toggleBtn.addEventListener("click", function () {
    console.log("clocked");
    this.classList.toggle("active");
  navbar.classList.toggle("active");
})

console.log("Working now")
console.log("I thing you're crazy")