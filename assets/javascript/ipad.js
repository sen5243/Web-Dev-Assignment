//Section 1 - Ipad Air
const section1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const image = entry.target.querySelector('.image1');
        const info = entry.target.querySelector('.section1-info');

        if (entry.isIntersecting) {
            image.classList.add('image1-animation');
            info.classList.add('info-animation');
            return;
        }

        image.classList.remove('image1-animation');
        info.classList.remove('info-animation');
    });
});

section1.observe(document.querySelector('.section1'));

//Section 2 - Ipad Pro
const section2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const image = entry.target.querySelector('.image2');
        const info = entry.target.querySelector('.section2-info');

        if (entry.isIntersecting) {
            image.classList.add('image2-animation');
            info.classList.add('info-animation');
            return;
        }

        image.classList.remove('image2-animation');
        info.classList.remove('info-animation');
    });
});

section2.observe(document.querySelector('.section2'));

//Section 3 - Ipad
const section3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const image = entry.target.querySelector('.image3');
        const info = entry.target.querySelector('.section3-info');

        if (entry.isIntersecting) {
            image.classList.add('image3-animation');
            info.classList.add('info-animation');
            return;
        }

        image.classList.remove('image3-animation');
        info.classList.remove('info-animation');
    });
});

section3.observe(document.querySelector('.section3'));

//Section 4 - Ipad Mini
const section4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const image = entry.target.querySelector('.image4');
        const info = entry.target.querySelector('.section4-info');

        if (entry.isIntersecting) {
            image.classList.add('image4-animation');
            info.classList.add('info-animation');
            return;
        }

        image.classList.remove('image4-animation');
        info.classList.remove('info-animation');
    });
});

section4.observe(document.querySelector('.section4'));

var ipadair_a = document.getElementById('ipadair_a');
var ipadpro_a = document.getElementById('ipadpro_a');
var ipad_a = document.getElementById('ipad_a');
var ipadmini_a = document.getElementById('ipadmini_a');

ipadair_a.addEventListener("click", function(air) {
    air.preventDefault;
    document.getElementById('ipadair').classList.remove('highlight_background')
    document.getElementById('ipadair').offsetWidth;
    document.getElementById('ipadair').classList.add('highlight_background')
}, false);

ipadpro_a.addEventListener("click", function(pro) {
    pro.preventDefault;
    document.getElementById('ipadpro').classList.remove('highlight_background')
    document.getElementById('ipadpro').offsetWidth;
    document.getElementById('ipadpro').classList.add('highlight_background')
}, false);

ipad_a.addEventListener("click", function(ipad) {
    ipad.preventDefault;
    document.getElementById('ipad').classList.remove('highlight_background')
    document.getElementById('ipad').offsetWidth;
    document.getElementById('ipad').classList.add('highlight_background')
}, false);

ipadmini_a.addEventListener("click", function(mini) {
    mini.preventDefault;
    document.getElementById('ipadmini').classList.remove('highlight_background')
    document.getElementById('ipadmini').offsetWidth;
    document.getElementById('ipadmini').classList.add('highlight_background')
}, false);