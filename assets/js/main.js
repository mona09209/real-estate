
let mobile_nav_icon = document.getElementById('mobile-nav-icon');
let aside = document.getElementById('aside');

mobile_nav_icon.addEventListener('click', () => {

  if (aside.style.right === '0px') {
    aside.style.right = '-250px';
  } else {
    aside.style.right = '0px';
  }

});

document.addEventListener('click', function (event) {
  if (aside.contains(event.target) && event.target === mobile_nav_icon) {
    aside.style.right = "-250px";
  }
});


window.addEventListener("scroll", function () {
  const mobileNav = document.getElementById('aside'); // or change to your sidebar class/id
  if (!mobileNav) return; // safety check

  if (window.scrollY > 50) {
    mobileNav.classList.add("scrolled");
  } else {
    mobileNav.classList.remove("scrolled");
  }
});




window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,              // يعمل تكرار مستمر
  grabCursor: true,        // المؤشر يتحول ليد عند السحب
  centeredSlides: false,   // خليه false عشان الكروت ما تنضغط للنص
  autoHeight: true,
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  slidesPerView: 1,        // الموبايل: كارت واحد
  spaceBetween: 20,        // مسافة بين الكروت

  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
   
  }
});


// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down 200px
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


