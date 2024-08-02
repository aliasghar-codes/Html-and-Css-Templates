document.querySelector("footer").innerHTML = `
<div class="footer-content container">
<div class="footer-one">
    <h3>Subscribe</h3>
    <a>Get 10% off on your first order</a>
</div>
<div class="footer-two">
    <h3>Support</h3>
    <div class="links">
        <a href="#">aliasgharbhatti30@gmail.com</a>
        <a href="#">+92310-3852-656</a>
    </div>
</div>
<div class="footer-three">
    <h3>Account</h3>
    <div class="links">
        <a href="#">My Account</a>
        <a href="#">Login / Register</a>
        <a href="#">Cart</a>
        <a href="#">Wishlist</a>
        <a href="#">Shop</a>
    </div>
</div>
<div class="footer-four">
    <h3>Quick Link</h3>
    <div class="links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms Of Use</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
    </div>
</div>
<div class="footer-five">
    <h3>Download App</h3>
    <a>Save $3 with App New User Only</a>
    <div class="download">
        <img src="./assets/images/Qr Code.png" alt="">
        <div class="app">
            <a href="https://play.google.com/store/apps" target="_blank">
            <img src="./assets/images/GooglePlay.png" alt="">
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank">
            <img src="./assets/images/AppStore.png" alt="">
            </a>
        </div>
    </div>
    <div class="footer-icons">
    <a href="#">
        <i class="ri-facebook-line"></i>
    </a>
    <a href="#">
        <i class="ri-twitter-line"></i>
    </a>
    <a href="#">
        <i class="ri-instagram-line"></i>
    </a>
    <a href="#">
        <i class="ri-linkedin-line"></i>
    </a>
    </div>
</div>
</div>
<p>&copy; Copyright Ali_Asghar <span id="year"></span>. All rights reserved</p>
`;



(function setYear(){
    const yearContainer = document.getElementById("year");
    const year = new Date().getFullYear();
    yearContainer.innerHTML = year;
})()


ScrollReveal().reveal(".footer-animation", {
    origin: "bottom",
    opacity: 0,
    distance: "40%",
    duration: 2000
})