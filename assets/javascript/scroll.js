let show = document.querySelectorAll(".show");
let category = document.querySelectorAll(".category");


window.addEventListener("scroll", function() {
    for (var i = 0; i < show.length; i++) { //loop using length of number of the show class
        let height = window.innerHeight; //height of window viewport
        let top = show[i].getBoundingClientRect().top; //the distance between the element and  top of viewport 
        let visible = 100; // detemine how far the distance for the element to show, the larger the value, the user will need to scroll further for the element to appear
        if (top < height - visible) {
            show[i].classList.add("out");
        } else {
            show[i].classList.remove("out");
        }
    }
});