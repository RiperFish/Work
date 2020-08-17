
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
const pop_carousel = document.querySelector('.pop-products .p-slier');
const pop_p_nextBtn = document.querySelector('.pop-products #p-next');
const pop_p_prevBtn = document.querySelector('.pop-products #p-prev');
const pop_carrouselSize = pop_carousel.clientWidth;

let pop_counter = 0;
pop_p_nextBtn.addEventListener('click', e => {
    if (pop_counter != 4) {
        pop_carousel.style.transition = "transform 0.4s ease-in-out";
        pop_counter++
        pop_carousel.style.transform = 'translateX(' + (-pop_carrouselSize - 16) * pop_counter + 'px)'
    }

})
pop_p_prevBtn.addEventListener('click', e => {
    if (pop_counter != 0) {
        pop_carousel.style.transition = "transform 0.4s ease-in-out";
        pop_counter--
        pop_carousel.style.transform = 'translateX(' + (-pop_carrouselSize - 16) * pop_counter + 'px)'
    }
}) 
// NEW PRODUCTS
const new_carousel = document.querySelector('.new-products .p-slier');
const new_p_prevBtn = document.querySelector('.new-products #p-prev');
const new_p_nextBtn = document.querySelector('.new-products #p-next');
const new_carrouselSize = new_carousel.clientWidth;
let new_counter = 0;
new_p_nextBtn.addEventListener('click', e => {
    if (new_counter != 4) {
        new_carousel.style.transition = "transform 0.4s ease-in-out";
        new_counter++
        new_carousel.style.transform = 'translateX(' + (-new_carrouselSize - 16) * new_counter + 'px)'
    }

})
new_p_prevBtn.addEventListener('click', e => {
    if (new_counter != 0) {
        new_carousel.style.transition = "transform 0.4s ease-in-out";
        new_counter--
        new_carousel.style.transform = 'translateX(' + (-new_carrouselSize - 16) * new_counter + 'px)'
    }
}) 
// DISCOUNTS
const d_carousel = document.querySelector('.discount .p-slier');
const d_p_prevBtn = document.querySelector('.discount #p-prev');
const d_p_nextBtn = document.querySelector('.discount #p-next');
const d_carrouselSize = d_carousel.clientWidth;
let d_counter = 0;
d_p_nextBtn.addEventListener('click', e => {
    if (d_counter != 4) {
        d_carousel.style.transition = "transform 0.4s ease-in-out";
        d_counter++
        d_carousel.style.transform = 'translateX(' + (-d_carrouselSize - 16) * d_counter + 'px)'
    }

})
d_p_prevBtn.addEventListener('click', e => {
    if (d_counter != 0) {
        d_carousel.style.transition = "transform 0.4s ease-in-out";
        d_counter--
        d_carousel.style.transform = 'translateX(' + (-d_carrouselSize - 16) * d_counter + 'px)'
    }
}) 