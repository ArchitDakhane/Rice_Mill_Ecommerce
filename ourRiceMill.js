document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// toggle-menu
// const mobileMenu = document.getElementById('mobile-menu');
// const navList = document.querySelector('.nav-list');

// mobileMenu.addEventListener('click', () => {
//     navList.classList.toggle('active');
// });