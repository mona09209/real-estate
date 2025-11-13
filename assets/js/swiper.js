 
let mobile_nav_icon = document.getElementById('mobile-nav-icon');
let aside = document.getElementById('aside');

mobile_nav_icon.addEventListener('click', () => {

  if (aside.style.right === '0px') {
    aside.style.right = '-250px';
  } else {
    aside.style.right = '0px';
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


document.addEventListener('click', function (event) {
  if (aside.contains(event.target) && event.target === mobile_nav_icon) {
    aside.style.right = "-250px";
  }
});


const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,

            // If we need pagination
            // pagination: {
            //     el: '.swiper-pagination',
            // },

            // Navigation arrows
            navigation: {
                nextEl: '.btn-next',
                prevEl: '.btn-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            });

            window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
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


