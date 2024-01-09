function init() {

    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

init()
// ++++++++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++===

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    navigation: {
        nextEl: ".select-next",
        prevEl: ".select-prev",
    },
    breakpoints: {
        866: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});


// +++++++++++++++++++++++++++++++= for trending ++++++++++++++++++++++++++++++++

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    navigation: {
        nextEl: ".trending-next",
        prevEl: ".trending-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    // freeMode: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    navigation: {
        nextEl: ".guide-next",
        prevEl: ".guide-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
    },
});

var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    navigation: {
        nextEl: ".guide-next",
        prevEl: ".guide-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});


// jfakljsfsssssssssssssssssssssssssssssss

var swiper = new Swiper('.swiper-container', {
    // spaceBetween: 30,
    effect: 'fade',
    // loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var tl = gsap.timeline();

gsap.from('.swiper-container', {
    opacity: 0,
    y: 50,
    delay: .5
})

gsap.from('#nav h4,#nav i', {
    y: 50,
    delay: .5,
    stagger: .2,
    opacity: 0
})

gsap.from('.himalya,#hero-content h1', {
    y: 120,
    delay: 1,
    stagger: .5,
    opacity: 0
})

gsap.from('#temperature,#payment', {
    x: 100,
    opacity: 0,
    delay: 1,
    stagger: .5
})

gsap.from('#filter', {
    opacity: 0,
    y: 50,
    delay: 1
})

gsap.from('#location,#activity,#date,#filter .search', {
    opacity: 0,
    y: 50,
    delay: 1.5,
    stagger: .2
})

gsap.from('#select-cont', {
    scrollTrigger: {
        scroller: '#main',
        trigger: '#select-cont',
        // markers: true,
        start: 'center 100%',
        end: 'top 0%',
        toggleActions: 'play reset play reset'
    },
    opacity: 0,
    duration: .5,
    y: 50
})

gsap.from('#trending-cont', {
    scrollTrigger: {
        scroller: '#main',
        trigger: '#trending-cont',
        // markers: true,
        start: 'center 100%',
        end: 'top 0%',
        toggleActions: 'play reset play reset'
    },
    opacity: 0,
    duration: .5,
    y: 50
})

gsap.from('#destination-cont', {
    scrollTrigger: {
        scroller: '#main',
        trigger: '#destination-cont',
        // markers: true,
        start: 'center 100%',
        end: 'top 0%',
        toggleActions: 'play reset play reset'
    },
    opacity: 0,
    duration: .5,
    y: 50
})

gsap.from('#seller-cont', {
    scrollTrigger: {
        scroller: '#main',
        trigger: '#seller-cont',
        // markers: true,
        start: 'center 100%',
        end: 'top 0%',
        toggleActions: 'play reset play reset'
    },
    opacity: 0,
    duration: .5,
    y: 50
})

gsap.from('#tour-guides-cont', {
    scrollTrigger: {
        scroller: '#main',
        trigger: '#tour-guides-cont',
        // markers: true,
        start: 'center 100%',
        end: 'top 0%',
        toggleActions: 'play reset play reset'
    },
    opacity: 0,
    duration: .5,
    y: 50
})

gsap.from('#experiance', {
    scrollTrigger: {
        scroller: '#main',
        trigger: '#experiance',
        // markers: true,
        start: 'top 100%',
        end: 'bottom 0%',
        toggleActions: 'play reset play reset'
    },
    opacity: 0,
    duration: .5,
    y: 50
})

gsap.from('.adv-gallery', {
    scrollTrigger: {
        scroller: '#main',
        trigger: '.adv-gallery',
        // markers: true,
        start: 'top 100%',
        end: 'bottom 0%',
        toggleActions: 'play reset play reset'
    },
    opacity: 0,
    duration: .5,
    x: -100
})

gsap.from('.adv-content', {
    scrollTrigger: {
        scroller: '#main',
        trigger: '.adv-content',
        // markers: true,
        start: 'top 100%',
        end: 'bottom 0%',
        toggleActions: 'play reset play reset'
    },
    opacity: 0,
    duration: .5,
    x: 100,
    duration: 1
})

function buttonIn(a) {
    a.style.transition = '1s cubic-bezier(0.075, 0.82, 0.165, 1)'
}

function searchIn(a) {
    a.style.transition = '.5s cubic-bezier(0.075, 0.82, 0.165, 1)'
}


// ++++++++++++++++++ menu ++++++++++++++++++++++++++

let pop_up = document.querySelector('.nav-pop-up')
let menubtn = document.querySelector('#nav-search .ri-menu-5-fill')
let cut = document.querySelector('#pop-up .ri-close-line')

menubtn.addEventListener('click', () => {
    pop_up.classList.toggle('show');
})

cut.addEventListener('click', () => {
    pop_up.classList.toggle('show');
})