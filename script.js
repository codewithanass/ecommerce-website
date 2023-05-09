// -------- script for toggle menu --------
let menuItems = document.getElementById("menu-items");

menuItems.style.maxHeight = "0px";

function menutoggle() {
    if (menuItems.style.maxHeight == "0px") {

        menuItems.style.maxHeight = "200px";
    }
    else {
        menuItems.style.maxHeight = "0px";
    }
}



// ---------- script for toggle form -----------
var loginForm = document.getElementById("login-form");
var regForm = document.getElementById("reg-form");
var Indicator = document.getElementById("Indicator");

    function register(){
        loginForm.style.transform = "translateX(0px)";
        regForm.style.transform = "translateX(0px)";
        Indicator.style.transform = "translateX(100px)"
    }
    function login(){
        loginForm.style.transform = "translateX(300px)";
        regForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)"
    }

// --------- script for product gallery ------------

let productImg = document.getElementById("product-img");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    productImg.src = smallImg[3].src;
}
smallImg[4].onclick = function () {
    productImg.src = smallImg[4].src;
}