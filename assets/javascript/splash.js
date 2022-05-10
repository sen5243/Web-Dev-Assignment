const splash = document.querySelector(".splash");
const isIntro = sessionStorage.getItem("isIntro");
//set timer for 2 seconds to make it hidden

window.onload = function pop() { // intro aanimation 
    sessionStorage.setItem("isIntro", "1"); //set value to "1" to avoid intro animation while reloading  or reenter page
    if (isIntro != "1") { //for first time enterring the webpage
        splash.classList.add("active");
        setTimeout(hidden, 3000);
    }
}


function hidden() {
    splash.classList.add("hidden");
}