// ===============================
// MOBILE MENU
// ===============================

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {

    menuIcon.classList.toggle("bx-x");

    navbar.classList.toggle("active");

};


// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {

    sections.forEach(section => {

        let top = window.scrollY;

        let offset = section.offsetTop - 150;

        let height = section.offsetHeight;

        let id = section.getAttribute("id");


        if (
            top >= offset &&
            top < offset + height
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });


            let activeLink =
                document.querySelector(
                    'header nav a[href*="' + id + '"]'
                );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });


    // ===============================
    // STICKY HEADER
    // ===============================

    let header = document.querySelector(".header");

    header.classList.toggle(
        "sticky",
        window.scrollY > 100
    );


    // ===============================
    // CLOSE MOBILE MENU
    // ===============================

    menuIcon.classList.remove("bx-x");

    navbar.classList.remove("active");

};



// ===============================
// TYPED TEXT ANIMATION
// ===============================

new Typed(".typing", {

    strings: [

        "Frontend Developer",

        "Web Designer",

        "Java Developer",

        "Student"

    ],

    typeSpeed: 80,

    backSpeed: 60,

    backDelay: 1200,

    loop: true

});



// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

ScrollReveal({

    distance: "60px",

    duration: 1600,

    delay: 150

});


ScrollReveal().reveal(

    ".home-content, .heading",

    {

        origin: "top"

    }

);


ScrollReveal().reveal(

    ".home-img, .service-box, .portfolio-box, .about-img",

    {

        origin: "bottom",

        interval: 100

    }

);


ScrollReveal().reveal(

    ".about-content",

    {

        origin: "right"

    }

);


ScrollReveal().reveal(

    ".contact form",

    {

        origin: "bottom"

    }

);



// ===============================
// DUMMY CONTACT FORM
// ===============================

let contactForm =
    document.querySelector("#contact-form");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        alert(
            "Message sent successfully! (Dummy Form)"
        );


        contactForm.reset();

    }
);



// ===============================
// SMOOTH NAVBAR CLOSE
// ===============================

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            menuIcon.classList.remove("bx-x");

            navbar.classList.remove("active");

        }
    );

});