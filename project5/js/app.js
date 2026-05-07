const menu = document.querySelector('.menu');const menuicon = document.querySelector('.menuicon');
menuicon.addEventListener('click', function () {
 menu.classList.toggle('active');
 if (menu.classList.contains('active')) {
    menuicon.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`
 }else{
    menuicon.innerHTML = `<i class="fa-solid fa-bars"></i>`
 }
})
