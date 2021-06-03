const preloader = document.querySelector('.onpageload')
window.addEventListener('load',(e)=>{
preloader.classList.add('hide-preloader')
})



const head = document.querySelector("header");
window.addEventListener("scroll", () => {
    head.classList.toggle("sticky", window.scrollY > 0);
});





const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".mobile-slider");

toggleBtn.addEventListener("click", function () {
  
    sidebar.classList.toggle("active-mobile-slider");
    const link = document.querySelector('.sidebar-links')
    const x = link.children
for (let i = 0; i < x.length; i++) {
    const element = x[i];

   element.addEventListener('click',(e)=>{
      setTimeout(() => {
    sidebar.classList.remove("active-mobile-slider");
      }, 200);

   })
    
}
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("active-mobile-slider");

});



const qBtn = document.querySelectorAll('.plus-minus-bts')
const ansContainer = document.querySelector('.quistion-s-box')


qBtn.forEach((e) => {

    e.addEventListener('click', (val) => {
        const openIt = val.currentTarget.parentElement.parentElement
        openIt.classList.toggle('quition-active')
    })
})



//ows Curousel start
$('.new-feature-carosuel').owlCarousel({
    loop: true,
    nav: true,
    stagePadding: 30,
    margin: 20,
    responsive: {
        0: {
            items: 2,

        },
        680: {
            items: 2
        },
        1000: {
            items: 3
        },
        1200: {
            items: 4
        }

    }
})

$('.owl-carousel-for-rate').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


//ows Curousel end



