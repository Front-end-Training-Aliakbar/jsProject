const video = document.querySelector("#vid");
const lists = document.querySelectorAll(".img img");

lists.forEach(list => {
    list.addEventListener('click', function() {
    const parent = list.parentElement;
    const newVideo = parent.getAttribute('data-video');
    video.src = newVideo;
     video.load();
     video.play();
    })
});





// chatgpt version
// document.addEventListener("DOMContentLoaded", () => {

//     const video = document.querySelector("#vid");
//     const thumbnails = document.querySelectorAll(".img");

//     thumbnails.forEach(item => {
//         item.addEventListener("click", () => {

//             thumbnails.forEach(el => el.classList.remove("active"));
//             item.classList.add("active");

//             const newVideo = item.dataset.video;

//             video.style.opacity = "0";

//             setTimeout(() => {
//                 video.src = newVideo;
//                 video.load();
//                 video.play();
//                 video.style.opacity = "1";
//             }, 400);

//         });
//     });

// });
