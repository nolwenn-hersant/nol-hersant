// [TOGGLE NAVBAR]
const toggleBtn = document.querySelector('.toggle-nav');
const toggleTarget = document.querySelector('.navbar__menu--list');

toggleBtn.addEventListener('click', (e) => {
    let toggleIcon = toggleBtn.querySelector('i');
    if (toggleIcon.classList.contains('bx-menu')) {
        toggleIcon.classList.value = 'bx bx-x';
    } else {
        toggleIcon.classList.value = 'bx bx-menu';
    }
    toggleTarget.classList.toggle('show-nav');
})


// [SCROLL TOP]
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.top__button').fadeIn();
        } else {
            $('.top__button').fadeOut();
        }
    });
    $('.top__button').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 150, // offset (in px) from the original trigger point
    delay: 20, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});