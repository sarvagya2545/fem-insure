let toggler = document.querySelector('.toggler');
let body = document.body;
toggler.addEventListener('click', function() {
    if (toggler.checked == true) {
        body.style.position = 'fixed';
    } else {
        body.style.position = 'relative';
    }
})