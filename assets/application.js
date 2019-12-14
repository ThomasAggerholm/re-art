//-------------- Frontpage animations --------------//

// Wait until the document has loaded
document.addEventListener('DOMContentLoaded', function() {

    // Call frontpage animation function
    //frontPageAnim()
})

// Frontpage animation function
// const frontPageAnim = function() {
//     const title = document.querySelector('.hero__title')
//     const text = document.querySelector('.hero__text')
//     const button = document.querySelector('.hero__btn')
//     const tl = new gsap.timeline()

//     tl.from(title, {
//         duration: 1,
//         opacity: 0,
//         y: 30,
//         delay: 1,
//         ease: 'power3.inOut'
//     })
//     .from(text, {
//         duration: 1,
//         opacity: 0,
//         y: 30,
//         ease: 'power3.inOut'
//     }, '-=0.8')
//     .from(button, {
//         duration: 1,
//         opacity: 0,
//         y: 30,
//         ease: 'power3.inOut' 
//     }, '-=0.8')
// }

// Frontpage featured collection scroll animations
const controller = new ScrollMagic.Controller()

const tl = new gsap.timeline()

const featureTitle = document.querySelector('.featured-collection__title')
const featureSlider = document.querySelector('.js-featured-slider')

tl.to(featureTitle, {
    delay: 0.3,
    duration: 1,
    opacity: 1,
    y: 0,
    ease: 'power3.inOut'
})
.to(featureSlider, {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: 'power3.inOut'
}, '-=0.5')

const scene = new ScrollMagic.Scene({
    triggerElement: '.featured-collection',
    triggerHook: 'onEnter'
})
    .setTween(tl)
    .addTo(controller)


// Frontpage featured category scroll animations
const scene2 = new ScrollMagic.Scene({
    triggerElement: '.featured-category',
    triggerHook: 'onCenter'
})
    .setClassToggle('.js-feat-col', 'is-visible')
    .addTo(controller)

// Frontpage featured theme scroll animations
const scene3 = new ScrollMagic.Scene({
    triggerElement: '.featured-theme',
    triggerHook: 'onEnter'
})
    .setClassToggle('.js-theme-col', 'is-visible')
    .addTo(controller)



//-------------- Slidenav animations --------------//
const
    burger = document.querySelector('.js-burger'),
    slidenav = document.querySelector('.slidenav'),
    slideNavInner = document.querySelector('.slidenav__inner'),
    slideRight = document.querySelector('.slidenav__right'),
    slideLeft = document.querySelector('.slidenav__left'),
    slideLeftLinkTitle = slideLeft.querySelector('.slidenav__left__link-title'),
    slideLayer = document.querySelector('.slidenav__layer'),
    slidenavClose = document.querySelector('.slidenav__close'),
    slidenavNav = document.querySelector('.slidenav__nav'),
    menuItems = slidenavNav.querySelectorAll('.menu__item'),
    menuItemLinks = document.querySelectorAll('.slidenav__nav .menu__item__link'),
    slideTl = new gsap.timeline({ paused: true })

    menuItemLinks.forEach((menuItemLink, i) => {
        menuItemLink.addEventListener('mouseenter', function() {
            slideLeftLinkTitle.classList.add('active')
            let itemName = menuItemLink.getAttribute('data-item-name')
            slideLeftLinkTitle.innerHTML = itemName
        })

        menuItemLink.addEventListener('mouseleave', function() {
            slideLeftLinkTitle.classList.remove('active')
        })
    })


slideTl.fromTo(slideLayer, {
    transformOrigin: 'right top',
    height: 0,
    skewY: 2
},
{
    duration: 0.8,
    height: '100vh',
    skewY: 0
})
.fromTo(slidenav, {
    transformOrigin: 'right top',
    height: 0,
    skewY: 2
},
{
    duration: 0.5,
    height: '100%',
    skewY: 0
}, '-=0.6')
.fromTo(slideRight, {
    opacity: 0,
    pointerEvents: 'none'
},
{
    duration: 0.5,
    opacity: 1,
    pointerEvents: 'auto'
}, '-=0.2')
.fromTo(slidenavNav, {
    opacity: 0,
    y: 50
},
{
    duration: 1,
    opacity: 1,
    y: 0,
    ease: 'power3.out'
}, '-=0.5')
.fromTo(menuItems, {
    opcity: 0,
    y: 20
},
{
    duration: 0.7,
    opacity: 1,
    y: 0,
    ease: 'power3.out',
    stagger: 0.1
}, '-=0.9')
.fromTo(slideLeft, {
    opacity: 0,
    y: 50
},
{
    duration: 1,
    opacity: 1,
    y: 0,
    ease: 'power3.out'
}, '-=0.7')

const openSlideNav = function() {
    slideTl.play()
}

const closeSlideNav = function() {
    slideTl.reverse()
}

burger.addEventListener('click', openSlideNav)
slidenavClose.addEventListener('click', closeSlideNav)

//-------------- Document Ready --------------//
$(document).ready(function () {


    // Smooth scroll to ID
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top - 80 + 'px',
          },
          500,
          'linear'
        )
      })

    // Hero slider
    function heroSliderInit() {
        if ($('.hero__slider').length > 0) {

            let speed = $('.hero__slider').attr('data-speed')

            $('.hero__slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: speed,
                arrows: false,
                infinite: true
            })
        }
    }
    heroSliderInit()

    // Featured collection slider
    $('.js-featured-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        prevArrow: '.featured-collection__slider__controls .prev',
        nextArrow: '.featured-collection__slider__controls .next',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }                
            }
        ]
    })



});