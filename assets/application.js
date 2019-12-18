//-------------- Frontpage animations --------------//

// Frontpage featured collection scroll animations
const controller = new ScrollMagic.Controller()

var tl = new gsap.timeline()

const featureTitle = document.querySelector('.featured-collection__title')
const featureSlider = document.querySelector('.js-featured-slider')
const featureCollection = document.querySelector('.featured-collection')

if ( featureCollection != null ) {

tl.to(featureTitle, {
    delay: 0.3,
    duration: 1,
    opacity: 1,
    y: 0,
    ease: 'power3.out'
})
tl.to(featureSlider, {
    duration: 1.2,
    opacity: 1,
    y: 0,
    ease: 'power3.out'
}, '-=0.8')

const scene = new ScrollMagic.Scene({
    triggerElement: '.featured-collection',
    triggerHook: 'onEnter'
})
    .setTween(tl)
    .addTo(controller)
}


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


// Frontpage info section scroll animations
var tl4 = new gsap.timeline()

const
    infoImg = document.querySelector('.info-section__image__img'),
    infoHeadline = document.querySelector('.info-section__text h2'),
    infoText = document.querySelector('.info-section__text p'),
    infoSection = document.querySelector('.info-section')

if ( infoSection != null ) {

tl4.fromTo(infoImg, {
    scale: 1.2
},
{
    duration: 1,
    scale: 1
})
.fromTo(infoHeadline, {
    opacity: 0,
    y: 50
},
{
    duration: 1,
    opacity: 1,
    y: 0,
    ease: 'power3.Out'
}, '-=0.5')
.fromTo(infoText, {
    opacity: 0,
    y: 50
},
{
    duration: 1,
    opacity: 1,
    y: 0,
    ease: 'power3.Out'
}, '-=0.8')

const scene4 = new ScrollMagic.Scene({
    triggerElement: '.info-section',
    triggerHook: '100%'
})
    .setTween(tl4)
    .addTo(controller)

}


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


slideTl.fromTo(slideNavInner, {
    opacity: 0,
    pointerEvents: 'none'
},
{
    opacity: 1,
    pointerEvents: 'auto',
    duration: 0
})
.fromTo(slideLayer, {
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
    y: 20,
    x: 0
},
{
    duration: 0.7,
    opacity: 1,
    y: 0,
    x: 0,
    ease: 'power3.out',
    stagger: 0.1
}, '-=0.9')
.fromTo(slideLeft, {
    opacity: 0,
    y: 50,
    pointerEvents: 'none'
},
{
    duration: 1,
    opacity: 1,
    y: 0,
    ease: 'power3.out',
    pointerEvents: 'auto'
}, '-=0.7')


const openSlideNav = function() {
    slideTl.play()
}

const closeSlideNav = function() {
    slideTl.reverse()
}

burger.addEventListener('click', openSlideNav)
slidenavClose.addEventListener('click', closeSlideNav)



// Instagram feed
const instaWrapper = document.querySelector('.instagram-feed')

if ( instaWrapper != null ) {

var token = instaWrapper.getAttribute('data-string').replace(/%/g, '.'),
num_photos = 10, // maximum 20
container = document.querySelector( '#instafeed' ), // it is our <ul id="rudr_instafeed">
scrElement = document.createElement( 'script' );

window.mishaProcessResult = function( { data } ) {
    data.forEach(post => {
        const imgUrl = post.images.low_resolution.url
        container.innerHTML = container.innerHTML + `<li class="instagram-feed__image"><img src="${imgUrl}"></li>`
    });
}

scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
document.body.appendChild( scrElement );

}



// Poster match
function posterMatch() {
    const
        imgs1 = document.querySelectorAll('.js-match-img1'),
        imgs2 = document.querySelectorAll('.js-match-img2'),
        frame1 = document.querySelector('.poster-match__frame1'),
        frame2 = document.querySelector('.poster-match__frame2'),
        bg1 = document.querySelector('.poster-match__frame1__bg'),
        bg2 = document.querySelector('.poster-match__frame2__bg'),
        frameGrid1 = document.querySelector('.poster-match__frame1-grid'),
        frameGrid2 = document.querySelector('.poster-match__frame2-grid'),
        btn = document.querySelector('#poster-match__btn'),
        posterMatch = document.querySelector('.poster-match')

    btn.addEventListener('click', function() {
        posterMatch.classList.add('is-visible')
    })

    frame1.addEventListener('click', function() {
        frameGrid1.classList.add('is-visible')
    })

    frame2.addEventListener('click', function() {
        frameGrid2.classList.add('is-visible')
    })

    imgs1.forEach(img1 => {
        img1.addEventListener('click', function() {
            let src = this.getAttribute('src')
            bg1.setAttribute('src', src)
            frameGrid1.classList.remove('is-visible')
        })
    });

    imgs2.forEach(img2 => {
        img2.addEventListener('click', function() {
            let src = this.getAttribute('src')
            bg2.setAttribute('src', src)
            frameGrid2.classList.remove('is-visible')
        })
    });

}

posterMatch()



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
                infinite: true,
                nextArrow: '.hero__slider__controls .next',
                prevArrow: '.hero__slider__controls .prev'
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




    $(function () {
        $(":file").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    function imageIsLoaded(e) {
        $('#myImg').attr('src', e.target.result);
        $('#yourImage').attr('src', e.target.result);
    };



});


// Draggable
gsap.registerPlugin(Draggable)

Draggable.create(".box", {type:"x,y", edgeResistance:0.65, bounds:"#container"});