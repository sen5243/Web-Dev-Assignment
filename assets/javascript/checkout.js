let itemCon = document.querySelector(".cart-container");
let items = JSON.parse(localStorage.getItem("CARTINFO"));
let form = document.querySelector(".form-container");
var currentPage = 0; // set surrent page number


function displayItems() { //display items in cart
    var totalQuantity = 0;
    var totalPrice = 0;
    var itemPrice = [];

    for (var i = 0; i < items.length; i++) { //calculate total price ans quantity in cart
        totalPrice += items[i].price * items[i].quantity;
        totalQuantity += items[i].quantity;
        itemPrice[i] = (items[i].price * items[i].quantity).toFixed(2);
    }

    itemCon.innerHTML += //add cart header
        `<h4>Cart <span class="price" style="color:black"><img src="../assets/images/shop.png" alt="shopping bag" class = "shop"> <b>${totalQuantity}</b></span></h4>
    <p>Total <span class="price" style="color:black"><b>RM${totalPrice.toFixed(2)}</b></span></p>
    <hr>`;

    for (var i = 0; i < items.length; i++) { // show selected items info
        itemCon.innerHTML += `
        <div class = "item-container">
            <div class = "product-container">
                <img src="${items[i].image}" alt="${items[i].name}"> 
                <p>${items[i].name} <small>x ${items[i].quantity}</small></p>
                <div class="price-container>
                    <span class="price">RM${itemPrice[i]}</span> 
                </div>
            </div>
        </div>`;
    }
}



displayItems();





function showPage(pageNum) { //show correct page and button

    var page = document.getElementsByClassName("page");
    page[pageNum].style.display = "block";
    //display correct button and change button text
    if (pageNum == 0) {
        document.getElementById("prev").style.display = "none";
    } else {
        document.getElementById("prev").style.display = "inline";
    }
    if (pageNum == (page.length - 1)) { //last page
        document.getElementById("next").value = "Confirm payment";
    } else {
        document.getElementById("next").value = "Next";
    }
    // show correct step
    showStep(pageNum)

}

function nextPrev(pageNum) {

    var page = document.getElementsByClassName("page");

    if (pageNum == 1 && !validateForm(currentPage)) { //if the current page is invalid
        return false;
    }
    // Hide the current page
    page[currentPage].style.display = "none";
    // Increase or decrease the current page by 1:
    currentPage += pageNum;

    if (pageNum == -1) { //first page
        if (form.classList.contains("flip-left")) {
            form.classList.remove("flip-left");
        }
        form.classList.add("flip-right");
    }
    if (pageNum == 1) { //last page (second page)
        if (form.classList.contains("flip-right")) {
            form.classList.remove("flip-right");
        }
        form.classList.add("flip-left");
    }

    if (currentPage >= page.length) { // end of the form

        let confirm = window.confirm("Do you sure that all of the infomation you have inputed is correct?")
        if (confirm) {
            document.getElementById("checkout-form").submit();
            window.alert("Payment made successfully.")
            localStorage.clear(); //clear local storage
            return false;
        } else {
            currentPage = 0; //back to first page if cancel
        }

    }
    showPage(currentPage);
}

function validateForm(currentPage) {

    var valid = true;
    var empty = 0; //to check whether the fields is empty 
    let page = document.getElementsByClassName("page");
    /*validation variables*/
    let input = page[currentPage].getElementsByTagName("input");
    let email = page[currentPage].querySelector("#email");
    let emailPat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let postal = page[currentPage].querySelector("#pos");
    let posPat = /^\d{5}$/ // matches exactly 5 digits
    let cardNum = page[currentPage].querySelector("#cnum");
    let cardPat = /^\d{16}$|^\d{4}-\d{4}-\d{4}-\d{4}$/ //matches exactly 16 digits or 4 4 digits grp seperated by "-"
    let cvv = page[currentPage].querySelector("#cvv");
    let cvvPat = /^\d{3}$/
    let expdate = page[currentPage].querySelector("#expdate");
    let datePat = /^\d{2}\/\d{2}$/
    let radio = page[currentPage].querySelector("input[name='card']:checked");
    // A loop that checks every input field in the current page
    for (var i = 0; i < input.length; i++) {
        if (input[i].value == "") {
            input[i].className += " invalid";
            valid = false;
            empty += 1;

        } else {
            if (input[i].classList.contains("invalid")) {
                input[i].classList.remove("invalid")
            }
        }
    }

    if (currentPage == 0) { // first page validation
        if (!emailPat.test(email.value) && email.value != "") {
            valid = false;
            email.className += " invalid";
            window.alert("Please enter a valid email address");
        }
        if (!posPat.test(postal.value) && postal.value != "") {
            valid = false;
            postal.className += " invalid";
            window.alert("Please enter a valid postal code with exactly 5 digits");
        }
    }
    if (currentPage == 1) { //second page validation

        if (!cardPat.test(cardNum.value) && cardNum.value != "") {
            valid = false;
            cardNum.className += " invalid";
            window.alert("Please enter a valid credit card number with exactly 16 digits");
        }
        if (!cvvPat.test(cvv.value) && cvv.value != "") {
            valid = false;
            cvv.className += " invalid";
            window.alert("Please enter a valid CVV number with exactly 3 digits");
        }
        if (expdate.value != "") {
            if (!datePat.test(expdate.value)) { //if pattern not match
                valid = false;
                expdate.className += " invalid";
                window.alert("Please enter your credit card expiry date with the format MM/YY");
            } else {
                let expdateArray = expdate.value.split("/");
                let mm = Number(expdateArray[0]); //2 digits of month 
                let yy = Number(expdateArray[1]); //2 digits of year


                if (mm < 1 || mm > 12) { //if month not in the range of 1 -12
                    valid = false;
                    expdate.className += " invalid";
                    window.alert("The month of the expiry date should within the range of 1 to 12");
                }
                if (yy < Number(new Date().getFullYear().toString().substr(-2))) { // if year before last two digits of current year
                    valid = false;
                    expdate.className += " invalid";
                    window.alert("The year of the expiry date should not before the current year");
                } else { // if year = current year but month < current month
                    if (yy == Number(new Date().getFullYear().toString().substr(-2)) && mm < new Date().getMonth() + 1) {
                        valid = false;
                        expdate.className += " invalid";
                        window.alert("The month of the expiry date should not before the current month of current year");
                    }
                }
            }


        }
        if (radio == null) { //if radio button is not selected
            valid = false;
            window.alert("Please select at least one card to proceed.");
        }



    }

    if (valid) { //if valid
        document.getElementsByClassName("step")[currentPage].className += " finish";
    }

    if (!valid && empty != 0) { // if one of the field is empty
        window.alert("Please fill in your infomation into all of the fields");
    }
    return valid; // return the valid status
}

showPage(currentPage);

function showStep(pageNum) {
    //remove "active" class to all step
    var step = document.getElementsByClassName("step");
    for (var i = 0; i < step.length; i++) {
        step[i].className = step[i].className.replace(" active", "");
    }
    //add class to the current step
    step[pageNum].className += " active";
}