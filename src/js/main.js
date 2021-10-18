/* Your JS here. */
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('#nav ul li')
var modal = document.getElementById("myModal");

function user_scroll() {
    let navbar = document.getElementById("nav");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.padding = "5px 10px";
    } else {
        navbar.style.padding = "20px 10px";
    }
}

// reference: https://www.youtube.com/watch?v=RsPWEmfOQdU (highlighted menu bar)
function menu_scroll() {
    // default active is home
    let current = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        // if we are at the top of a section
        if (scrollY >= (sectionTop - sectionHeight / 2)) {
            current = section.getAttribute('id');
        }
    })

    // update highlighted part of menu
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })
}

// reference: https://www.w3schools.com/howto/howto_js_slideshow.asp
// initialize with first index image
var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// next arrow - increment to next slide
function plusSlides() {
    showSlides(slideIndex += 1);
}

// prev arrow - decrement to next slide
function minusSlides() {
    showSlides(slideIndex -= 1);
}

// displays image slide at position n
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    // replace with image at index n
    // edge cases - wrap around to make slideshow circular
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    // set all slides to invisible
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // set all dots to inactive
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // set current slide to display
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// reference: https://www.w3schools.com/howto/howto_css_modal_images.asp
// https://stackoverflow.com/questions/47798971/several-modal-images-on-page
var images = document.getElementsByClassName("modal_images");
var modalImg = document.getElementById("mod_display");
// caption text is alt of img
var captionText = document.getElementById("caption");

// add modal class to each image
for (var idx = 0; idx < images.length; idx++) {
    var img = images[idx];
    // for each image, add modal onclick
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// close modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// add event listeners for scrolling and buttons
window.addEventListener('scroll', function () { user_scroll() });
window.addEventListener('scroll', function () { menu_scroll() });
// when window is resized, recalculate section sizes
window.addEventListener('resize', function () { menu_scroll() });
document.getElementById("prev").addEventListener("click", function () { minusSlides() });
document.getElementById("next").addEventListener("click", function () { plusSlides() });