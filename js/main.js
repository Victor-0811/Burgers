const menuBtn = document.querySelector('.menu-btn'),
    nav = document.querySelector('.nav'),
    btn = document.querySelector('.btn--form'),
    btnForm = document.querySelector('.btn--modal'),
    modal = document.querySelector('.modal'),
    body = document.querySelector('body');



menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menuBtn.classList.toggle('menu-btn--active');
    nav.classList.toggle('nav--active');
    body.classList.toggle('no-scroll');
});


//Modal
btn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'flex';
    body.classList.toggle('no-scroll');
});

btnForm.addEventListener('click', function (e) {
    modal.style.display = 'none';
    body.classList.toggle('no-scroll');
});
//