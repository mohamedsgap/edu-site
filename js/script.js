/* global document, window*/

var tog = document.getElementById('toggle'),
    navigation = document.getElementById('navigation');

var humb = 'images/humburger.png',
    close = 'images/close.png',
    humbset = true;

tog.onclick = function(){
    
    if(humbset){
        this.setAttribute('src',close);
        document.body.style.overflow = 'hidden';
        navigation.style.left = '0';
        humbset = false;
    }
    else{
        this.setAttribute('src',humb);
        document.body.style.overflow = 'auto';
        navigation.style.left = '100%';
        humbset = true;
    }
};


/* Start Popular Courses Slider */

/* Popular Courses Variables*/
var x = 0;
var slider = document.getElementById('slider'),
    slide1 = document.getElementById('slide1'),
    slide2 = document.getElementById('slide2');

/* Testimonial Variables */
var testSlider = document.getElementsByClassName('cust-test');
var testGab = 0;


/* When Click On The Left Slider Button*/
slide1.onclick = function () {
    x = 0;
    slide2.style.backgroundColor = '#DDD';
    this.style.backgroundColor = '#f7631b';
    slider.style.left = x + '%';
};

slide2.onclick = function () {
    x = -100;
    slide1.style.backgroundColor = '#DDD';
    this.style.backgroundColor = '#f7631b';
    slider.style.left = x + '%';
};
/* When Click On The Right Slider Button */
window.onload = function () {

    // Popular Courses
    setInterval(function () {
        x -= 25;
        if (x == -125) {
            x = 0;
            slide1.style.backgroundColor = '#f7631b';
            slide2.style.backgroundColor = '#DDD'
        }

        if (x == -100) {
            slide2.style.backgroundColor = '#f7631b';
            slide1.style.backgroundColor = '#DDD'
        }

        slider.style.left = x + '%'
    }, 6000);

    // Testimonial Slider
    setInterval(function () {

        testGab -= 50;
        if (testGab == -250) {
            testGab = 0
        }
        testSlider[0].style.left = testGab + '%'

    }, 4000);



};

/* End Popular Courses Slider */

/* Start Events Slider */
var s1 = document.getElementById('s1'),
    s2 = document.getElementById('s2'),
    s3 = document.getElementById('s3');

var eventSlider = document.getElementById('events-slider');

function reset() {
    s1.style.backgroundColor = '#DDD';
    s2.style.backgroundColor = '#DDD';
    s3.style.backgroundColor = '#DDD'
}

s1.onclick = function () {
    eventSlider.style.left = '0%';
    reset();
    this.style.backgroundColor = '#f7631b'
};

s2.onclick = function () {
    eventSlider.style.left = '-100%';
    reset();
    this.style.backgroundColor = '#f7631b'
};

s3.onclick = function () {
    eventSlider.style.left = '-200%';
    reset();
    this.style.backgroundColor = '#f7631b'
};
/* End Events Slider */
