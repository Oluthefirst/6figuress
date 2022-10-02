
let valueDisplay = document.querySelectorAll(".num");
let interval =3500;


valueDisplay.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});



ScrollReveal({
  reset: true,
  origin: "top",
  distance: "5px",
  duration: 4000,
  delay: 30, 
})
ScrollReveal().reveal(',section-3-image-house-3, .section-4-house-2, .section-6-image-1, .paragraph', {delay: 100, origin: 'left'});
ScrollReveal().reveal('.section-3-image-house-3, .sec-3-rate, .section-6-image-2', {origin: 'right'});
ScrollReveal().reveal('.section-2, .section-3, .section-4, .section-5, .section-6, .section-7, .section-8, .section-6-image-3, .scetion-5-housse-child', {origin: 'bottom'});
ScrollReveal().reveal('.section-6-image-4, .section-7-image-2,  .section-4-house-1,   .section-1', {origin: 'top'});




const toggle = document.getElementById("toggle");
const navbar = document.querySelector(".link-house");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  toggle.classList.remove("active");
}