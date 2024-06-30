
// Toggle Images on Hover | Social Section
document.addEventListener("DOMContentLoaded", function () {
    const image1 = document.querySelector('.social-section .default-state');
    const image2 = document.querySelector('.social-section .hover-state');

    image1.addEventListener('mouseover', () => {
        image1.style.opacity = '0';
        image2.style.opacity = '1';
    });

    image1.addEventListener('mouseout', () => {
        image1.style.opacity = '1';
        image2.style.opacity = '0';
    });
});

// Toggle Images on Hover | Process Section

document.addEventListener("DOMContentLoaded", function () {
    const image1 = document.querySelector('.process-section .first .default-state');
    const image2 = document.querySelector('.process-section .first .hover-state');

    image1.addEventListener('mouseover', () => {
        image1.style.opacity = '0';
        image2.style.opacity = '1';
        image2.style.transform = 'translate(-50%, -50%) scale(1.2) rotate(8deg)';
    });

    image1.addEventListener('mouseout', () => {
        image1.style.opacity = '1';
        image2.style.opacity = '0';
        image2.style.transform = 'translate(-50%, -50%) scale(0.8) rotate(0deg)';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const image1 = document.querySelector('.process-section .second .default-state');
    const image2 = document.querySelector('.process-section .second .hover-state');

    image1.addEventListener('mouseover', () => {
        image1.style.opacity = '0';
        image2.style.opacity = '1';
        image2.style.transform = 'translate(-50%, -50%) scale(1.2)';
    });

    image1.addEventListener('mouseout', () => {
        image1.style.opacity = '1';
        image2.style.opacity = '0';
        image2.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const image1 = document.querySelector('.process-section .third .default-state');
    const image2 = document.querySelector('.process-section .third .hover-state');

    image1.addEventListener('mouseover', () => {
        image1.style.opacity = '0';
        image2.style.opacity = '1';
        image2.style.transform = 'translate(-50%, -50%) scale(1.2)';
    });

    image1.addEventListener('mouseout', () => {
        image1.style.opacity = '1';
        image2.style.opacity = '0';
        image2.style.transform = 'translate(-50%, -50%) scale(0.7)';
    });
});


// Toggle Sidemenu | Navigation

const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const getBody = document.querySelector('body');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("isactive");
    sidebar.classList.toggle("isactive");
    getBody.classList.toggle("stop-srollable");
});


// Sidemenu Options | Navigation

const faqBox = document.querySelectorAll('.sidemenu-box');

faqBox.forEach((item) => {
    accQuestion = item.querySelector('.sidemenu-heading');

    item.classList.add('hide');

    accQuestion.addEventListener("click", () => {
        for (let i = 0; i < faqBox.length; i++) {
            if (faqBox[i] == item) {
                faqBox[i].classList.toggle('hide');
            } else {
                faqBox[i].classList.add('hide');
            }
        }

    });
});

// Sticky navbar
const navbar = document.querySelector('.navigation-menu');

let stickyTopValue = navbar.offsetTop;

window.addEventListener("scroll", () => {
    let scrollTopValue = window.pageYOffset;

    if (scrollTopValue > 360) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

});

// AOS
AOS.init({
    once: true,
});


// Access by Keyboard

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.navigation-menu a, .hamburger');
  
    menuItems.forEach(item => {
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && !e.shiftKey) {
          const submenu = item.nextElementSibling;
          if (submenu && submenu.classList.contains('submenu-wrapper')) {
            const firstSubmenuItem = submenu.querySelector('a');
            if (firstSubmenuItem) {
              firstSubmenuItem.focus();
              e.preventDefault();
            }
          }
        }
      });
    });
  });


// Slider | Pods Section
// Dependency | jQuery

$(document).ready(function () {
    $('.pods-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '14%',
        arrows: false,
        dots: false,
    });
});

// Slider | Section Section
// Dependency | jQuery

$(document).ready(function () {
    $('.fun-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        dots: true,
    });
});