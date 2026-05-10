const red = document.querySelector('.red');
const green = document.querySelector('.green');
const fav = document.querySelector('#favicon')
red.addEventListener('click', function (e) {
    e.preventDefault();
    fav.setAttribute('href' , 'image/favicon.png')
 })
green.addEventListener('click', function (e) {
    e.preventDefault();
    fav.setAttribute('href' , 'image/faviconTWo.png')
 })
