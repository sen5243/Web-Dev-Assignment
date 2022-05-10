const background = document.querySelector(".dark-body");

function showstars() {
    let count = 400; // star quantity
    let i = 0;

    while (i < count) {
        var star = document.createElement("i"); //create st
        let x = Math.floor(Math.random() * window.innerWidth); //star width
        let y = Math.floor(Math.random() * window.innerHeight); //star height
        let duration = Math.random() * 10; //animation duration
        let size = Math.random() * 2; ///star size

        star.style.width = 1 + size + "px";
        star.style.height = 1 + size + "px";
        star.style.left = x + "px";
        star.style.top = 150 + y + "px";


        star.style.animationDuration = 5 + duration + "s"; //animation duration
        star.style.animationDelay = duration + "s"; //animation delay
        background.appendChild(star); //append the stars into the dark-body container
        i++;

    }
    window.addEventListener("resize", remove);
};

function remove() { //refresh stars to reset the position of the star while resizing
    let star = [...background.getElementsByTagName("i")];
    star.forEach(element => {
        element.remove();
    });
    showstars();
}

showstars();