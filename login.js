const signup = document.querySelector(".btnsignup");
const login = document.querySelector(".btnsignin");
const box = document.querySelector("#container");
const box2 = document.querySelector("#container2");
const rightbox = document.querySelector("#right-container");
const leftbox = document.querySelector("#left-container");

signup.addEventListener("click",function () {
    box.style.display ="none";
    box2.style.display ="block";
    rightbox.style.display="none";
    leftbox.style.display="block";
});
login.addEventListener("click",function () {
    box.style.display ="block";
    box2.style.display ="none";
    rightbox.style.display="block";
    leftbox.style.display="none";
});