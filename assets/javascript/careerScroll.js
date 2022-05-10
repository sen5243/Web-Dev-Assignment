function show() {
    var shows = document.querySelectorAll(".show");

    for (var i = 0; i < shows.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = shows[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            shows[i].classList.add("active");
        } else {
            shows[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", show);

function showleft() {
    var shows = document.querySelectorAll(".showleft");

    for (var i = 0; i < shows.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = shows[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            shows[i].classList.add("active");
        } else {
            shows[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", showleft);