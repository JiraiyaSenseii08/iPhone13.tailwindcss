//navbar-fixed//

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
} else {
    header.classList.remove('navbar-fixed');
}
};

//hamburger//

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// iphone ganti2//

// let midnightBtn = document.getElementById("midnight");
// let pinkBtn = document.getElementById("pink");
// let blueBtn = document.getElementById("blue");
// let Hp = document.getElementsById("Hp");

// midnightBtn.onclick = function() {
//     Hp.style.backgroundImage = "url(img/iphone_13_midnight_1_3-removebg-preview.png)";
// };
// pinkBtn.onclick = function() {
//     Hp.style.backgroundImage = "url(img/iphone_13_pink_1-removebg-preview.png)";
// };
// blueBtn.onclick = function() {
//     Hp.style.backgroundImage = "url(img/iphone_13_blue_1_3-removebg-preview.png)";
// };