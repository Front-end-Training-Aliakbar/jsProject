const toggle = document.querySelector(".menu-toggle");
const content = document.querySelector("aside")

toggle.addEventListener('click', function () {
    content.classList.toggle("active");
    toggle.classList.toggle("active")
})
