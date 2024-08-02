const cardTop = Array.from(document.querySelectorAll(".card-top"));
const addCartText = Array.from(document.querySelectorAll(".card-top h4"));
const headerImage = document.getElementById("header-image");
const mediaQuery = window.matchMedia('(max-width: 768px)');

cardTop.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
        addCartText[index].style.opacity = "1";
        addCartText[index].style.bottom = "0";
    })
    element.addEventListener("mouseleave", () => {
        addCartText[index].style.opacity = "0";
        addCartText[index].style.bottom = "-40px";
    })
})

let countdown = {
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
};

let timerInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    countdown.seconds--;

    if (countdown.seconds < 0) {
        countdown.seconds = 59;
        countdown.minutes--;

        if (countdown.minutes < 0) {
            countdown.minutes = 59;
            countdown.hours--;

            if (countdown.hours < 0) {
                countdown.hours = 23;
                countdown.days--;

                if (countdown.days < 0) {
                    clearInterval(timerInterval);
                    document.getElementById("timer").innerHTML = "Sale has ended!";
                    return;
                }
            }
        }
    }

    document.getElementById("days").textContent = countdown.days;
    document.getElementById("hours").textContent = countdown.hours;
    document.getElementById("minutes").textContent = countdown.minutes;
    document.getElementById("seconds").textContent = countdown.seconds;
}

if (mediaQuery.matches) {
    headerImage.src = "assets/images/header-image 2.png";
} else {
    headerImage.src = "assets/images/header-image.png"
}

// **********Animations************

ScrollReveal().reveal('.main-top', {
    distance: '30%',
    origin: 'bottom',
    opacity: 0,
    duration: 1000
});

ScrollReveal().reveal(".container", {
    origin: "top",
    opacity: 0,
    distance: "40%",
    duration: 1000
})



