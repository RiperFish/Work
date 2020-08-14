
// NAVIGATION MENU
const listItems = document.querySelectorAll('.menu-container .menu li a');

function selectListItem(e) {
    unselectItem();
    this.classList.add('selected-page');
}

function unselectItem() {
    listItems.forEach(item => item.classList.remove('selected-page'));
}
listItems.forEach(item => item.addEventListener('click', selectListItem));
// NAVIGATION MENU END

// ASIDE NAVIGATION
const asideListItems = document.querySelectorAll('.aside-list li');

function aideSelectListItem(e) {
    aideUnselectItem();
    this.classList.add('selected');
}

function aideUnselectItem() {
    asideListItems.forEach(item => item.classList.remove('selected'));
}
asideListItems.forEach(item => item.addEventListener('click', aideSelectListItem));
// ASIDE NAVIGATION END

// HEADER SLIDE
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const tracks = document.querySelectorAll('.track');
const auto_slide = true;
const slide_time = 5000; let slide_interval = 5000;

const nextSlide = () => {
    // GRAB THE CURRENT CLASS
    const currentSlide = document.querySelector('.current');
    const currentTrack = document.querySelector('.selected-track');
    // REMOVE THE CLASS CURRENT FROM THE CURRENT SLIDE
    currentSlide.classList.remove('current');
    currentTrack.classList.remove('selected-track');
    // CHECK FOR THE NEXT SLIDE
    if (currentSlide.nextElementSibling) {
        // MAKE IT CURRENT
        currentSlide.nextElementSibling.classList.add('current');
        currentTrack.nextElementSibling.classList.add('selected-track');
    } else {
        // RESTART SLIDE
        slides[0].classList.add('current');
        tracks[0].classList.add('selected-track');
    }
    setTimeout(() => currentSlide.classList.remove('current'))
    setTimeout(() => currentTrack.classList.remove('selected-track'))
}

const prevSlide = () => {
    // GRAB THE CURRENT CLASS
    const currentSlide = document.querySelector('.current');
    const currentTrack = document.querySelector('.selected-track');
    // REMOVE THE CLASS CURRENT FROM THE CURRENT SLIDE
    currentSlide.classList.remove('current');
    currentTrack.classList.remove('selected-track');
    // CHECK FOR THE PREV SLIDE
    if (currentSlide.previousElementSibling) {
        // MAKE IT CURRENT
        currentSlide.previousElementSibling.classList.add('current');
        currentTrack.previousElementSibling.classList.add('selected-track');
    } else {
        // RESTART SLIDE
        slides[slides.length - 1].classList.add('current');
        tracks[tracks.length - 1].classList.add('selected-track');

    }
    setTimeout(() => currentSlide.classList.remove('current'))
    setTimeout(() => currentTrack.classList.remove('selected-track'))
}

tracks.forEach(track => {
    track.addEventListener('click', e => {
        let index = Array.from(tracks).indexOf(e.target);
        const currentTrack = document.querySelector('.selected-track');
        const currentSlide = document.querySelector('.current');

        if (track.classList.contains('selected-track')) {

        } else {
            currentSlide.classList.remove('current');
            currentTrack.classList.remove('selected-track');
            slides[index].classList.add('current');
            tracks[index].classList.add('selected-track');


            setTimeout(() => currentSlide.classList.remove('current'))
            setTimeout(() => currentTrack.classList.remove('selected-track'))
        }
        if (auto_slide) {
            clearInterval(slide_interval);
            slide_interval = setInterval(nextSlide, slide_time);
        }
    })

});
nextBtn.addEventListener('click', e => {
    nextSlide();
    if (auto_slide) {
        clearInterval(slide_interval);
        slide_interval = setInterval(nextSlide, slide_time);
    }
})
prevBtn.addEventListener('click', e => {
    prevSlide();
    if (auto_slide) {
        clearInterval(slide_interval);
        slide_interval = setInterval(nextSlide, slide_time);
    }
})

if (auto_slide) {
    slide_interval = setInterval(nextSlide, slide_time);
}

// POPULAR PRODUCTS
const carousel = document.querySelector('.p-slier');
const p_nextBtn = document.querySelector('#p-next');
const carrouselSize = carousel.clientWidth;
const slideCount = 5;
let counter = 1;
p_nextBtn.addEventListener('click', e => {
    if(counter == 4){

    }else{
        carousel.style.transition = "transform 0.4s ease-in-out";
        carousel.style.transform = 'translateX('+ (-carrouselSize-20) * counter  +'px)'
        counter++
    }

}) 