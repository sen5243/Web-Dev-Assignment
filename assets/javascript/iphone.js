//Section 1
const observersection1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title = entry.target.querySelector('.content1 > p');
        const first = entry.target.querySelector('.oh');
        const second = entry.target.querySelector('.so');
        const third = entry.target.querySelector('.pro');
        const image1 = entry.target.querySelector('.image1 > img');

        if (entry.isIntersecting) {
            title.classList.add('title-animation');
            first.classList.add('oh-animation');
            second.classList.add('so-animation');
            third.classList.add('pro-animation');
            image1.classList.add('image1-animation')
            return;
        }

        title.classList.remove('title-animation');
        first.classList.remove('oh-animation');
        second.classList.remove('so-animation');
        third.classList.remove('pro-animation');
        image1.classList.remove('image1-animation')
    });
});

observersection1.observe(document.querySelector('#content1'));

//Section 2
const observersection2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title = entry.target.querySelector('.content2 > h2');
        const image = entry.target.querySelector('.image2');

        if (entry.isIntersecting) {
            title.classList.add('title-animation');
            image.classList.add('image2-animation');

            return;
        }

        title.classList.remove('title-animation');
        image.classList.remove('image2-animation');

    });
});

observersection2.observe(document.querySelector('#content2'));

//Section 3
const observersection3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title2 = entry.target.querySelector('.content3 > h2');

        if (entry.isIntersecting) {
            title2.classList.add('title-animation');
            return;
        }

        title2.classList.remove('title-animation');
    });
});

observersection3.observe(document.querySelector('#content3'));

//Section 4
const observersection4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title = entry.target.querySelector('.content4 > h2');
        const slogan = entry.target.querySelector('.content4 > h1');
        const image = entry.target.querySelector('.image4 > img');
        const p = entry.target.querySelector('.content4 > p');

        if (entry.isIntersecting) {
            title.classList.add('title-animation');
            slogan.classList.add('so-animation');
            image.classList.add('image4-animation');
            p.classList.add('image2-animation');
            return;
        }

        title.classList.remove('title-animation');
        slogan.classList.remove('so-animation');
        image.classList.remove('image4-animation');
        p.classList.add('image2-animation');
    });
});

observersection4.observe(document.querySelector('.content4'));

//Section 5
const observersection5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title = entry.target.querySelector('.content5 > h2');
        const content = entry.target.querySelector('.content5flex');

        if (entry.isIntersecting) {
            title.classList.add('title-animation');
            content.classList.add('oh-animation');
            return;
        }

        title.classList.remove('title-animation');
        content.classList.remove('oh-animation');
    });
});

observersection5.observe(document.querySelector('.content5'));