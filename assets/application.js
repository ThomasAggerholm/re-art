//-------------- Frontpage animations --------------//

// Wait until the document has loaded
document.addEventListener('DOMContentLoaded', function() {

    // Call frontpage animation function
    frontPageAnim()
})

// Frontpage animation function
const frontPageAnim = function() {
    const title = document.querySelector('.hero__title')
    const text = document.querySelector('.hero__text')
    const button = document.querySelector('.hero__btn')
    const tl = new gsap.timeline()

    tl.from(title, {
        duration: 1,
        opacity: 0,
        y: 30,
        delay: 1,
        ease: 'power3.inOut'
    })
    .from(text, {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: 'power3.inOut'
    }, '-=0.8')
    .from(button, {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: 'power3.inOut' 
    }, '-=0.8')
}

// Frontpage scroll animations
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


//-------------- Document Ready --------------//
$(document).ready(function () {

    // Smooth scroll to ID
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          500,
          'linear'
        )
      })

    // Featured collection slider
    $('.js-featured-slider').slick({
        slidesToShow: 4,
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