document.querySelector("header").innerHTML = `
<section class="header-top">
    <p>Summer Sale For All Summer Wear And Free Express Delivery -OFF 50%! </p>
    <a href="#">Shop Now</a>
</section>
<section class="border-bottom">
    <div class="header-bottom container">
        <a href="./index.html">ShopSavvy</a>
        <ul class="pc-nav">
            <li><a href="./index.html">Home</a></li>
            <li id="contact-page"><a href="./contact.html">Contact</a></li>
            <li id="about-page"><a href="./about.html">About</a></li>
            <li><a href="./signup.html">Sign Up</a></li>
        </ul>
        <div class="user">
            <form action="#">
                <input type="text" placeholder="What are you looking for?">
                <img src="assets/images/search-icon.png" alt="">
            </form>
            <a href="./wishlist.html">
            <img src="assets/images/heart-icon.png" alt="">
            </a>
            <a href="./cart.html">
            <img src="assets/images/cart-icon.png" alt="">
            </a>
        </div>
        <i class="ri-menu-3-line hamburger"></i>
        <div class="mobile-nav">
            <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./signup.html">Sign Up</a></li>
            <li><a href="./cart.html">Cart</a></li>
            </ul>
        </div>
    </div>
</section>
`;

const mobileNav = document.querySelector(".mobile-nav");

let count = 1;
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("ri-close-fill");
    hamburger.classList.toggle("ri-menu-3-line");
    if(count === 1){
        mobileNav.style.left = "1px";
        mobileNav.style.display = "block";
        count++;
    }else if (count === 2){
        mobileNav.style.left = "105%";
        mobileNav.style.display = "none";
        count--;
    }
})
