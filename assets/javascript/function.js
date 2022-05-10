const bar = document.querySelector(".bar");
const container = document.querySelector(".links-container");
const links = document.querySelectorAll(".links");
var dropdowns = document.querySelectorAll(".dropdown");
let prevScrollpos = window.scrollY;

/* Shows and hide  options under links  by add and remove class */
function respond() {
    if (container.classList.contains("active")) { /*If the container classlist contains "active" */
        container.classList.remove("active"); //romove class "active" to hide options

    } else {
        container.classList.add("active"); // add class "active to display options under solid bar
    }
}

/* Activate Options under Links */
function activeDropdown() {
    if (this.classList.contains("dropdown-active")) {
        this.classList.remove("dropdown-active"); // remove class "dropdown-active" while the classlist of the links contains "dropdown-active" to hide the options below
    } else {
        for (let link of links) {
            link.classList.remove("dropdown-active");
        }
        this.classList.add("dropdown-active"); // add class "dropdown-active" to activate the dropdown list
    }
}

if (bar) {
    bar.addEventListener("click", respond, false); // activate respond() while clicking the solib bar in mobile view
}

/* Event Listeners */
for (let link of links) {
    if (link.querySelector(".dropdown")) {
        link.addEventListener("click", activeDropdown, false); //activate the dropdown menu if the first descendant class of the links contains "dropdown"
    }
    link.addEventListener("keypress", activeDropdown, false); // make the links able to be proceed using enter key including links without "dropdown" class
}

document.addEventListener("scroll", function() { //hide navbar while scrolling down
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) { //while scrolling up
        document.querySelector(".navbar-container").style.top = "0px";
        for (let dropdown of dropdowns) {
            dropdown.style.top = "77px";
        }
    } else { //while scrolling down
        document.querySelector(".navbar-container").style.top = "-100px";
        for (let dropdown of dropdowns) {
            dropdown.style.top = "-500px"; //hide dropdown list
        }
    }
    prevScrollpos = currentScrollPos; //sychronise the scroll position


});

window.addEventListener('dfMessengerLoaded', function() { //to adjust chatbot height
    let dfMessenger = document.querySelector('df-messenger');
    let chatBox = dfMessenger.shadowRoot.querySelector('df-messenger-chat');
    let style = document.createElement('style');

    const pcMinScreenWidth = 680; //pc screen width

    style.textContent = //insert media query and style
        `@media screen and (min-width:${pcMinScreenWidth}px) 
     {
         .chat-wrapper { max-height: 70% }
     }
     @media screen and (max-width:${pcMinScreenWidth}px) 
     {
         .chat-wrapper { max-height: 40% }
     }`;

    chatBox.shadowRoot.appendChild(style); //insert style in the shadowroot to force change the height
});