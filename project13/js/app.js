const imgbxs = document.querySelectorAll('.imgbox');

imgbxs.forEach(imgbx => {
imgbx.addEventListener('click', function () {
   imgbx.classList.toggle('active')
})
});
