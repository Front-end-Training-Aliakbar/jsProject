const charkh = document.querySelector(".charkhan");
const menu = document.querySelector(".menu")

charkh.addEventListener('click', function () {
    menu.classList.toggle("active");
    charkh.classList.toggle("active")
})
