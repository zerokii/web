/*var slides = document.querySelectorAll('.slide'); //[slide1, slide2, slide3, slide4, slide5]
var buttons = document.querySelectorAll('.slider-btn'); //[btn1, btn2, btn3, btn4. btn5]
let currentSlide = 1;
//Manual images slider
var manualNav = function (manual) {
    slides.forEach(function (slide) {
        slide.classList.remove('active');
        slide.style.display="none";
        buttons.forEach((btn) => {
            btn.classList.remove('active');
        });
    });
    slides[manual].classList.add('active');
    slides[manual].style.display = "block";
    buttons[manual].classList.add('active');
}
buttons.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
        manualNav(i);
        currentSlide = i;
    })
})
*/

//Automatic Image Slider
var slideIndex = 0;
automaticDiv();

function automaticDiv() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var buttons = document.getElementsByClassName("slider-btn");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace("slider-btn active", "slider-btn");
        slides[i].className = slides[i].className.replace("slide active", "slide");

    }
    slideIndex++; // slideIndex = slideIndex + 1 
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    buttons[slideIndex - 1].className = buttons[slideIndex - 1].className.replace("slider-btn", "slider-btn active");
    slides[slideIndex - 1].className = slides[slideIndex - 1].className.replace("slide", "slide active");
    setTimeout(automaticDiv, 3000);
}
