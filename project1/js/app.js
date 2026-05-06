const image = document.querySelector('.profile');
const menu = document.querySelector('.menu');

if (image && menu) {
    image.addEventListener('click',function() {
menu.classList.toggle('active');
});
};
//تمام لیست قابل کلیک می شود
document.querySelectorAll('.menu ul li').forEach(li => {
  li.addEventListener('click', () => {
    li.querySelector('a').click();
  });
});
