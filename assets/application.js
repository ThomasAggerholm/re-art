//Currency Formatting
function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
  
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
        formatString = format || '{{amount}} kr';
  
    function defaultTo(value, defaultValue) {
      return value == null || value !== value ? defaultValue : value;
    }
  
    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = defaultTo(precision, 2);
      thousands = defaultTo(thousands, ',');
      decimal = defaultTo(decimal, '.');
  
      if (isNaN(number) || number == null) {
        return 0;
      }
  
      number = (number / 100.0).toFixed(precision);
  
      var parts = number.split('.'),
          dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
          centsAmount = parts[1] ? decimal + parts[1] : '';
  
      return dollarsAmount + centsAmount;
    }
  
    var value = '';
  
    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_space_separator':
        value = formatWithDelimiters(cents, 2, ' ', '.');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, ',', '.');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
    }
  
    if (formatString.indexOf('with_comma_separator') !== -1) {
      return formatString.replace(placeholderRegex, value).replace(',00', '');
    } else {
      return formatString.replace(placeholderRegex, value).replace('.00', '');
    }
  }



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
    menuItems = slideRight.querySelectorAll('.menu__item'),
    menuItemLinks = document.querySelectorAll('.slidenav__nav .menu__item__link'),
    rightImage = document.querySelector('.slidenav__right__image-wrapper')
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
    opacity: 0,
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
.fromTo(rightImage, {
    opacity: 0,
    y: 50,
},
{
    opacity: 1,
    y: 0,
    ease: 'power3.out',
    duration: 1
}, '-=0.7')
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


//-------------- Mobile navigation toggle --------------//
const
    body = document.querySelector('body'),
    mobileBurger = document.querySelector('.js-mobile-burger'),
    mobileNav = document.querySelector('.js-mobile-nav')

mobileBurger.addEventListener('click', function() {
    if ( body.classList.contains('nav-open') ) {
        this.classList.remove('nav-open')
        body.classList.remove('nav-open')
    } else {
        this.classList.add('nav-open')
        body.classList.add('nav-open')
    }
})



//-------------- Instagram feed --------------//
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



//-------------- Poster match --------------//
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

    if ( posterMatch != null ) {

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

}
posterMatch()



//-------------- All rooms animations --------------//
const roomItems = document.querySelectorAll('.js-all-rooms-animate')

function fadeIn() {
    let delay = 0.2

    roomItems.forEach(item => {
        let itemTop = item.getBoundingClientRect().top

        if ( itemTop < window.innerHeight ) {
            item.classList.add('animated')
            item.style.transitionDelay = `${delay}s`
            delay += 0.2
        }
    })
}

fadeIn()
document.addEventListener('scroll', fadeIn)
window.addEventListener('resize', fadeIn)


//-------------- Cart terms --------------//
var termsLabel = document.querySelector('[data-terms-label]')
var termsInput = document.querySelector('[data-terms-input]')
var cartSubmit = document.querySelector('[data-cart-submit]')
var cartForm = document.querySelector('[data-cart-form]')

if (cartSubmit) {
    cartSubmit.addEventListener('click', function(e) {  
        var checked = termsInput.checked
    
        if ( checked != true ) {
            e.preventDefault()
            alert('Du mangler at accepterer handelsbetingelser')
        }
    })
}



//-------------- Document Ready --------------//
$(document).ready(function () {

    //-------------- Contact pop-up --------------//
    var contactPopup = $('.contact-pop-up')
    var contactPopupClose = $('.contact-pop-up__close')
    var contactPopupButtons = $("a[href$='#contact-popup']")

    contactPopupButtons.on('click', function(e) {
        e.preventDefault()
        contactPopup.addClass('active')
    })

    contactPopupClose.on('click', function() {
        contactPopup.removeClass('active')
    })
    

    //-------------- Mobile menu toggles --------------//
    const
        toggle = $('.js-mobile-toggle'),
        mobileMenu = $('.mobile-header__navigation__menu'),
        childMenuItem = $('.mobile-menu__item__link'),
        ChildMenu = $('.child-link__mobile-menu'),
        grandChildItem = $('.child-link'),
        grandChildMenu = $('.megamenu__grandchild')

    toggle.click(function(e) {
        if ( $(this).parent().hasClass('has-children') ) {
            e.preventDefault()
        }
        $(this).siblings(mobileMenu).slideToggle(250)
    })

    childMenuItem.click(function(e) {
        if ( $(this).parent().hasClass('has-children') ) {
            e.preventDefault()
        }
        $(this).siblings(ChildMenu).slideToggle(250)
    })

    grandChildItem.click(function(e) {
        if ( $(this).parent().hasClass('has-children') ) {
            e.preventDefault()
        }
        $(this).siblings(grandChildMenu).slideToggle(250)
    })


    //-------------- Search toggle --------------//
    const
        searchIcon = $('.js-search-icon'),
        searchWrapper = $('.js-search-form'),
        searchInput = $('.js-search-input')

    searchIcon.click(function() {
        searchInput.focus()
        searchWrapper.toggleClass('active')
    })

    function closeSearch(e) {
        if (e.keyCode == 27) {
            searchWrapper.removeClass('active')
        } else if (!searchIcon.is(e.target) && !searchWrapper.is(e.target) && !searchInput.is(e.target)) {
            searchWrapper.removeClass('active')
        }
    }

    $(document).on('keydown', closeSearch)
    $(document).on('click', closeSearch)



    //-------------- Upload image --------------//
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


    //-------------- Drag images around --------------//
    gsap.registerPlugin(Draggable)

    Draggable.create(".frame", {type:"x,y", edgeResistance:0.65, bounds:".poster-match__canvas"});


    //-------------- Smooth scroll to ID --------------//
    // $('a[href*="#"]').on('click', function(e) {
    //     e.preventDefault()
      
    //     $('html, body').animate(
    //       {
    //         scrollTop: $($(this).attr('href')).offset().top - 80 + 'px',
    //       },
    //       500,
    //       'linear'
    //     )
    //   })

    //-------------- Hero slider --------------//
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

    //-------------- Featured collection slider --------------//
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


    //-------------- Product images --------------//

    // Product image zoom
    var products = document.querySelectorAll('.featured-image__wrapper');
    var ww = $(window).width();

    products.forEach(function(product){
        var href = product.querySelector('img').getAttribute('data-image');
        
        if (ww < 900) {
            $(product).trigger('zoom.destroy');
        } else {
            $(product).zoom({url: href})
        }
    })

    // Change featured image to the clicked thumbnail
    $('.product__images__thumbnail').on('click', function() {
        let newImg = $(this).attr('src')
        let dataImg = $(this).attr('data-image')

        $('.product__images__featured').attr('src', newImg)
        $('.zoomImg').attr('src', dataImg)
        $('.zoomImg').css('width', '200%')
        $('.zoomImg').css('height', '200%')
    })



    //-------------- Product quantity change --------------//
    var $btn = $('.js-prod-qty-picker .quantity-btn')
    var value = parseInt($('.js-prod-qty-picker .quantity-btn.value').text())
    var qty = parseInt($('#quantity').val())
    var qtyMax = parseInt($('#quantity').attr('max'))
    var $productPrice = $('.js-product-price')
    var $productComparePrice = $('.js-product-compare-at-price')
    var $variantSelect = $('.js-variant-select')
    var $buyFrame = $('#buy-frame')
    var buyFrameValue = $buyFrame.val()

    if ( qty == qtyMax ) {
        $('.quantity-btn.plus').prop('disabled', true)
    }

    function changeQty() {
        if ( qty > 0 ) {
            $('.quantity-btn.minus').prop('disabled', false)
        }

        if ( $(this).hasClass('minus') ) {
            $('.js-prod-qty-picker .quantity-btn.value').text(value -= 1)
            $('#quantity').val(qty -= 1)

            if ( qty === 1 ) {
                $('.quantity-btn.minus').prop('disabled', true)
            }

        } else if ( $(this).hasClass('plus') ) {
            if ( qty == qtyMax ) {
                $('.quantity-btn.plus').prop('disabled', true)
            }
            
            $('.js-prod-qty-picker .quantity-btn.value').text(value += 1)
            $('#quantity').val(qty += 1)
        }
    }

    $btn.on('click', changeQty)

    $variantSelect.on('change', function() {
        $productPrice.text($(this).find(':selected').attr('data-price'))
        $productComparePrice.text($(this).find(':selected').attr('data-compare-price'))
    })

    //Ajax the add to cart
    function addToCartAjax(e) {
        e.preventDefault();

        let $addToCartBtn = $('#add-to-cart-btn')
        
        $addToCartBtn.text('Tilføjer...');
        $addToCartBtn.prop('disabled', true);
        
        $.ajax({
            type: 'POST',
            url: '/cart/add',
            dataType: 'json',
            data: $(this).serialize(),
            success: onCartUpdated,
            error: onError
        });
    }

    function onCartUpdated(){    
        const $cartDrawer = $('.js-cart-drawer-line-items')
        let $addToCartBtn = $('#add-to-cart-btn')
        let btnText = $addToCartBtn.text()

        $.ajax({
            type: 'GET',
            url: '/cart',
            context: document.body,
            success: function(context) {
                const
                    $cartCount = $(context).find('.cart__count'),
                    cartCountData = $cartCount.attr('data-cart-count'),
                    $headerCartCount = $('.js-cart-count'),
                    $cartDrawerItemCount = $('.cart-drawer__item-count'),
                    cartHtml = $(context).find('.js-cart-drawer-html').html()

                $headerCartCount.text(cartCountData)
                $cartDrawerItemCount.text(cartCountData)
                $cartDrawer.html(cartHtml)
                
                $addToCartBtn.text('Tilføjet!')
                setTimeout(function() {
                    $addToCartBtn.prop('disabled', false)
                    $addToCartBtn.text('Tilføj til kurv')
                    openCartDrawer()
                }, 1000);
            }
        })

        var cartTotal = $('.cart-total')
        var cartSubtotal = $('.cart-subtotal')

        setTimeout(function(){
            $.get('/cart.js', function(data) {
                var data = JSON.parse(data)
                var subtotal = data.items_subtotal_price
                var shippingPrice = theme.shippingPrice * 100
                var freeShippingText = theme.freeShippingText
                var totalCartPrice

                if (shippingPrice === 0) {
                    totalCartPrice = formatMoney(data.total_price)
                } else {
                    totalCartPrice = formatMoney(data.total_price + shippingPrice)
                }
    
                cartTotal.html(totalCartPrice)
                cartSubtotal.html(formatMoney(subtotal))
            })
        }, 800)
    }
 
    function onError() {
        alert('Varen er udsolgt');
        $addToCartBtn.text('Udsolgt');
    }

    function openCartDrawer(e) {
        if ( e )
            e.preventDefault();

        const
            $cartDrawer = $('.js-cart-drawer'),
            $cartDrawerInner = $('.js-cart-drawer-inner')

        $cartDrawer.addClass('open')
        $cartDrawerInner.addClass('open')
    }

    function closeCartDrawer() {
        const
            $cartDrawer = $('.js-cart-drawer'),
            $cartDrawerInner = $('.js-cart-drawer-inner')

        $cartDrawer.removeClass('open')
        $cartDrawerInner.removeClass('open')
    }

    function removeFromCartDrawer(e) {
        e.preventDefault()
        let
            $removeLink = $(this),
            removeQuery = $removeLink.attr('href').split('?')[1]

        $.post('/cart/change.js', removeQuery, onCartUpdated, 'json') 

        const $cartDrawer = $('.js-cart-drawer-line-items')
        var cartTotal = $('.cart-total')
        var cartSubtotal = $('.cart-subtotal')

        setTimeout(function(){
            $.get('/cart.js', function(data) {
                var data = JSON.parse(data)
                console.log('Data: ', data)
                var totalCartPrice = data.total_price + 3000
                var subtotal = data.items_subtotal_price
    
                cartTotal.html(formatMoney(totalCartPrice))
                cartSubtotal.html(formatMoney(subtotal))
            })
        }, 800)
    }

    $(document).on('submit', '#add-to-cart-form', addToCartAjax);
    $(document).on('click', '.js-cart-icon', openCartDrawer);
    $(document).on('click', '.js-cart-drawer-close', closeCartDrawer);
    $(document).on('keydown', function(e) {
        if ( e.keyCode == 27 )
            closeCartDrawer()
    })
    $(document).on('click', '.js-line-item-remove', removeFromCartDrawer)

    
//-------------- Collection filter --------------//
var filterLinks = $('[data-sidebar-link]')
var filterToggles = $('[data-sidebar-toggle]')
var filterWrappers = $('[data-sidebar-wrapper]')

filterToggles.click(function(e) {
    if ( $(this).hasClass('has-children') ) {
        e.preventDefault()
    }
    
    $(this).siblings(filterWrappers).slideToggle(300)
})

filterLinks.each(function() {
    if ( $(this).hasClass('active') ) {
        $(this).closest(filterWrappers).show()
    }
})

var mobileFilterBtn = $('.js-mobile-filter-toggle')
var sidebar = $('.js-sidebar')

mobileFilterBtn.on('click', function() {
    sidebar.toggle()
})



// Toggle product description
var descriptionToggle = $('[data-description-toggle]')
var descriptionExtra = $('[data-extra-description]')

descriptionToggle.on('click', function(e) {
    e.preventDefault()
    descriptionExtra.slideToggle(300)
})


// Toggle page content
var pageContentToggle = $('[data-page-content-toggle]')
var pageContentExtra = $('[data-page-content-extra]')

pageContentToggle.on('click', function(e) {
    e.preventDefault()
    pageContentExtra.slideToggle(300)
})


// Inspiration slider
var inspirationSlider = $('[data-inspiration-slider]')
var inspirationItems = $('[data-inspiration-item]')
var inspirationClose = $('[data-inspiration-close]')
var inspirationModal = $('[data-inspiration-modal]')

inspirationItems.each(function(i) {
    $(this).click(function() {
        inspirationSlider.slick('slickGoTo', i)
        setTimeout(function() {
            inspirationModal.addClass('active')
        }, 300)
    })
})

inspirationClose.click(function() {
    inspirationModal.removeClass('active')
})

inspirationSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.inspiration-page__slider__arrow.prev',
    nextArrow: '.inspiration-page__slider__arrow.next',
    dynamicHeight: true
})

    
});