// const progressBar = document.querySelector('.pro');
// let maxScroll;
// let ticking = false;
// //
// function updateMaxScroll() {
//     maxScroll = document.documentElement.scrollHeight - window.innerHeight;
// }
//
// function updateProgressBar() {
//     const scrollY = window.pageYOffset;
//     const percent = (scrollY / maxScroll) * 100;
//     progressBar.style.width = percent + "%";
//     ticking = false;
// }
//
// window.addEventListener("scroll", () => {
//     if (!ticking) {
//         window.requestAnimationFrame(updateProgressBar);
//         ticking = true;
//     }
// });
//
// window.addEventListener("resize", updateMaxScroll);
// // یک بار اول اجرا شود
// updateMaxScroll();
// updateProgressBar();



 const prgressbar = document.querySelector('.pro');

 let maxScroll;
 let ticking = false;
//محاسبه مقدار اسکرول کل
 function updateMaxScroll() {
    maxScroll = document.documentElement.scrollHeight - window.innerHeight;
 }
// محاسبه درصد اسکرول و رندر نوار
function updateProgressBar() {
    height = window.pageYOffset;
    percent = (height / maxScroll) *100;
    prgressbar.style.width= percent +'%';
    ticking = false;
}
// هندلر اسکرول: بهینه با requestAnimationFrame
window.addEventListener('scroll', function () {
    if (!ticking) {
        window.requestAnimationFrame(updateProgressBar());
        ticking = true;
    }
})
// هنگام تغییر اندازه صفحه دوباره محاسبه شود
window.addEventListener('resize', updateMaxScroll());
//یکبار اول اجرا شود
updateMaxScroll();
updateProgressBar();
