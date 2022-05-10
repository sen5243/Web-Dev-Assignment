// SELECT ELEMENTS
const productsCon = document.querySelector(".products-container");
const proCon = document.querySelector(".iphone-pro-container");
const SCon = document.querySelector(".iphone-se-container");
const airCon = document.querySelector(".ipad-air-container");
const miniCon = document.querySelector(".ipad-mini-container");
const imac24Con = document.querySelector(".imac-24-container");
const podsCon = document.querySelector(".airpods-container");
const tvCon = document.querySelector(".tv-container");
const watch7Con = document.querySelector(".watch-7-container");
const watch3Con = document.querySelector(".watch-3-container");
const watchSeCon = document.querySelector(".watch-se-container");
const accessoriesCon = document.querySelector(".accessories-container");
const cartItems = document.querySelector(".cart-items");
const subtotal = document.querySelector(".subtotal");
const itemNum = document.querySelector(".item-num");
const cartBag = document.querySelector(".cart-bag");
const cartCon = document.querySelector(".cartItem-container");
let cart = []; //initialise cart

function initCart() { //chcek whether the localstorage exist and get data from it if exists
    if (localStorage.getItem("CARTINFO") == null) {
        cart = [];
        console.log(cart);
    } else {
        cart = JSON.parse(localStorage.getItem("CARTINFO"));

    };
    update(); // initailse localstorage
    return cart;
}
cart = initCart(); // initialize cart

/* show products infomation */
function showIphone() {

    products.forEach((product) => {
        productsCon.innerHTML += `            
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>RM</small>${product.price}</h2>
                <p>
                    ${product.description}
                </p>
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="../assets/images/white-cart.jpg" alt="add to cart">
            </div>
            <div class = "tooltip">
            <p>Add to cart</p>
            </div>
        </div>
    </div>`;
    });
}
showIphone();

function showIphonePro() {
    iphone13_pro.forEach((item) => {
        products.push({
            ...item
        })
    })

    iphone13_pro.forEach((product) => {
        proCon.innerHTML += `            
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>RM</small>${product.price}</h2>
                <p>
                    ${product.description}
                </p>
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="../assets/images/white-cart.jpg" alt="add to cart">
            </div>
            <div class = "tooltip">
            <p>Add to cart</p>
            </div>
        </div>
    </div>`;
    });
}

showIphonePro();

function showIphoneSe() {
    iphone13_SE.forEach((item) => {
        products.push({
            ...item
        })
    })

    iphone13_SE.forEach((product) => {
        SCon.innerHTML += `            
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>RM</small>${product.price}</h2>
                <p>
                    ${product.description}
                </p>
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="../assets/images/white-cart.jpg" alt="add to cart">
            </div>
            <div class = "tooltip">
            <p>Add to cart</p>
            </div>
        </div>
    </div>`;
    });
}

showIphoneSe();

function showIpadAir() {
    ipad_air.forEach((item) => {
        products.push({
            ...item
        })
    })

    ipad_air.forEach((product) => {
        airCon.innerHTML += `            
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>RM</small>${product.price}</h2>
                <p>
                    ${product.description}
                </p>
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="../assets/images/white-cart.jpg" alt="add to cart">
            </div>
            <div class = "tooltip">
            <p>Add to cart</p>
            </div>
        </div>
    </div>`;
    });
}

showIpadAir();

function showIpadMini() {
    ipad_mini.forEach((item) => {
        products.push({
            ...item
        })
    })

    ipad_mini.forEach((product) => {
        miniCon.innerHTML += `            
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>RM</small>${product.price}</h2>
                <p>
                    ${product.description}
                </p>
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="../assets/images/white-cart.jpg" alt="add to cart">
            </div>
            <div class = "tooltip">
            <p>Add to cart</p>
            </div>
        </div>
    </div>`;
    });
}

showIpadMini();

function showImac24() {
    imac24.forEach((item) => {
        products.push({
            ...item
        })
    })

    imac24.forEach((product) => {
        imac24Con.innerHTML += `            
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>RM</small>${product.price}</h2>
                <p>
                    ${product.description}
                </p>
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="../assets/images/white-cart.jpg" alt="add to cart">
            </div>
            <div class = "tooltip">
            <p>Add to cart</p>
            </div>
        </div>
    </div>`;
    });
}

showImac24();

function showPods() {
    airpods.forEach((item) => {
        products.push({
            ...item
        })
    })

    airpods.forEach((product) => {
        podsCon.innerHTML += `            
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>RM</small>${product.price}</h2>
                <p>
                    ${product.description}
                </p>
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="../assets/images/white-cart.jpg" alt="add to cart">
            </div>
            <div class = "tooltip">
            <p>Add to cart</p>
            </div>
        </div>
    </div>`;
    });
}

showPods();

function showTv() {
    tv.forEach((item) => {
        products.push({
            ...item
        })
    })

    tv.forEach((product) => {
        tvCon.innerHTML += `            
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>RM</small>${product.price}</h2>
                <p>
                    ${product.description}
                </p>
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="../assets/images/white-cart.jpg" alt="add to cart">
            </div>
            <div class = "tooltip">
            <span class = "tooltip-text">Add to cart</span>
            </div>
        </div>
    </div>`;
    });
}

showTv();

function showWatch7() {
    watches7.forEach((item) => {
        products.push({
            ...item
        })
    })

    watches7.forEach((product) => {
        watch7Con.innerHTML += `            
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>RM</small>${product.price}</h2>
                <p>
                    ${product.description}
                </p>
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="../assets/images/white-cart.jpg" alt="add to cart">
            </div>
            <div class = "tooltip">
            <span class = "tooltip-text">Add to cart</span>
            </div>
        </div>
    </div>`;
    });
}

showWatch7();

function showWatch3() {
    watches3.forEach((item) => {
        products.push({
            ...item
        })
    })

    watches3.forEach((product) => {
        watch3Con.innerHTML += `            
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>RM</small>${product.price}</h2>
                <p>
                    ${product.description}
                </p>
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="../assets/images/white-cart.jpg" alt="add to cart">
            </div>
            <div class = "tooltip">
            <span class = "tooltip-text">Add to cart</span>
            </div>
        </div>
    </div>`;
    });
}

showWatch3();

function showWatchSe() {
    watchesSe.forEach((item) => {
        products.push({
            ...item
        })
    })

    watchesSe.forEach((product) => {
        watchSeCon.innerHTML += `            
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>RM</small>${product.price}</h2>
                <p>
                    ${product.description}
                </p>
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="../assets/images/white-cart.jpg" alt="add to cart">
            </div>
            <div class = "tooltip">
            <span class = "tooltip-text">Add to cart</span>
            </div>
        </div>
    </div>`;
    });
}

showWatchSe();

function showAcessories() {
    accessories.forEach((item) => {
        products.push({
            ...item
        })
    })

    accessories.forEach((product) => {
        accessoriesCon.innerHTML += `            
        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>RM</small>${product.price}</h2>
                <p>
                    ${product.description}
                </p>
            </div>
            <div class="add-to-cart" onclick="addToCart(${product.id})">
                <img src="../assets/images/white-cart.jpg" alt="add to cart">
            </div>
            <div class = "tooltip">
            <span class = "tooltip-text">Add to cart</span>
            </div>
        </div>
    </div>`;
    });
}

showAcessories();



function addToCart(id) {
    if (cart.some((item) => item.id === id)) { //check if the products added alr exist in cart
        changeNumberOfUnits("add", id);
    } else {
        const item = products.find((product) => product.id === id); //add item into cart storage

        cart.push({ //add new item info and quantity into cart array
            ...item,
            quantity: 1,
        });
    }

    update();
}

function update() { //used to update cart info, subtotal, and cart indicator
    showCart();
    showTotal();
    showCartNum();

    localStorage.setItem("CARTINFO", JSON.stringify(cart)); // save or initialize cart info string to local storage
}

// calculate and show subtotal
function showTotal() {
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((item) => { //calculate the total price and total quantity of the items using for loop
        totalPrice += item.price * item.quantity;
        totalItems += item.quantity;
    });

    subtotal.innerHTML = `Subtotal (${totalItems} items): RM${totalPrice.toFixed(2)}`;
}
// show cart items
function showCart() {
    cartItems.innerHTML = ""; //reset the cart items display in the cart container before writing the items in it
    cart.forEach((item) => {
        cartItems.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeProduct(${item.id})">
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                <small>RM</small>${item.price}
            </div>
            <div class="units">
                <div class="btn deduct" onclick="changeNumberOfUnits('deduct', ${item.id})">-</div>
                <div class="number">${item.quantity}</div>
                <div class="btn add" onclick="changeNumberOfUnits('add', ${item.id})">+</div>           
            </div>
        </div>
      `;
    });
    console.log(cart);
}

// remove item from cart
function removeProduct(id) { //remove cart item when user click on the product image
    cart = cart.filter((item) => item.id !== id); //when user clicks on the product image, return all products in the cart, except the one clicked by the user
    update();
}


function changeNumberOfUnits(action, id) { // change number of units for the item
    cart = cart.map((item) => { //return the item and its quantity based on the button clicked
        let quantity = item.quantity;

        if (item.id === id) {
            if (action === "deduct" && quantity > 1) {
                quantity--;
            } else if (action === "add") {
                quantity++;
            }
        }

        return { //return all item info with new quantity
            ...item,
            quantity,
        };
    });

    update();
}

function validateShop() { // check whether user purchased any items
    console.log(cart.length);
    if (cart.length === 0) { // if user didn't purchase any items
        window.alert("Please select at least an item to proceed to the checkout session.")
        window.location.reload();

    } else { // if user purchases at least one item
        window.location.href = "checkout.html"; //bring user to checkout.html
    }

}

function showCartNum() { // show cart number in the number indicator
    let totalItems = 0;
    cart.forEach((item) => {
        totalItems += item.quantity;
    });

    itemNum.innerHTML = `<span class="num">${totalItems}</span>`;
}

function showHideCart() { //show and hide cart while clicking on the shopping bag
    if (cartCon.classList.contains("showing")) {
        cartCon.classList.remove("showing");
        cartCon.classList.add("hiding");
    } else {
        cartCon.classList.remove("hiding");
        cartCon.classList.add("showing");
    }
}