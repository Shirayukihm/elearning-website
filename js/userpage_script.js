let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header.flex.navbar');
  
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

const button1 = document.getElementById('signout_btn');

    button1.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    const button2 = document.getElementById('profile_btn');

    button2.addEventListener('click', function() {
        window.location.href = 'profile.html';
    });
    const button3 = document.getElementById('setting_btn');

    button3.addEventListener('click', function() {
        window.location.href = 'profile.html';
    });

    function menuToggle(){
        const toggleMenu = document.querySelector('.menu');
        toggleMenu.classList.toggle('active')
    }

    

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            
        },
        1024: {
            slidesPerView: 3,
           
        },
    },
});
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            
        },
        1024: {
            slidesPerView: 3,
           
        },
    },
});

