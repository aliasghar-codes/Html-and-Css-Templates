let buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener("click", (e)=>{
        playSound(e.target.innerHTML);
        buttonAnimation(e.target.innerHTML);
    })
}

document.addEventListener("keypress", (e)=>{
    playSound(e.key);
    buttonAnimation(e.key);
})

function playSound(e) {
    switch (e) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(e){
    let activeBtn = document.querySelector("." + e);
    activeBtn.classList.add("pressed");
    setTimeout(()=>{
        activeBtn.classList.remove("pressed")
    }, 100)
}