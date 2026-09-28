const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");


/* MENU MOBILE */

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* TUTUP MENU SETELAH DIKLIK */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            anchor.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* FORM KONTAK */

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Pesan berhasil dikirim! Terima kasih atas pesan Anda.");

    contactForm.reset();

});