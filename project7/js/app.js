const toTop = document.querySelector('.toTop');
window.addEventListener('scroll', function () {
    if (window.pageYOffset >400) {
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
})

//scroll smooth
// toTop.addEventListener('click', function (e) {
//     e.preventDefault();

//     let scrollStep = -20;
//     let scrollInterval= setInterval(() => {
//         if (window.pageYOffset != 0) {
//             window.scrollBy(0 , scrollStep);
//         }
//         else {
//             clearInterval(scrollInterval)
//         }
//     }, 10);
// })
toTop.addEventListener('click', function (e) {
    e.preventDefault();

    function scrollToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0 , -20);
            requestAnimationFrame(scrollToTop)
        }

    }
    requestAnimationFrame(scrollToTop)
})
