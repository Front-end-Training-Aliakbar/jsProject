const icon = document.querySelector('.icon');
const input = document.querySelector('input');

icon.addEventListener('click',
    function () {
        if (input.type === 'password') {
            input.setAttribute('type' , 'text');
            icon.classList.add('hide')
        } else {
            input.setAttribute('type' , 'password');
            icon.classList.remove('hide')
        }
    }
)
