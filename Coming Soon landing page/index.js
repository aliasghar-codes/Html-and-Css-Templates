const countDownDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000) + (6 * 60 * 60 * 1000) + (50 * 60 * 1000) + (38 * 1000);

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = (days<10?'0':'') + days;
    document.getElementById('hours').innerHTML = (hours<10?'0':'') + hours;
    document.getElementById('minutes').innerHTML = (minutes<10?'0': '') + minutes;
    document.getElementById('seconds').innerHTML = (seconds<10?'0': '') +seconds;

}, 1000);

