let firstImage = document.getElementById("img1");
let secondImage = document.getElementById("img2");
let thirdImage = document.getElementById("img3");
let leftBtn = document.getElementById("leftbtn");
let rightBtn = document.getElementById("rightbtn");
let btncount = 1;

leftBtn.style.opacity = "0";
rightBtn.addEventListener("click", ()=>{
    if(btncount == 1){
        firstImage.style.display = "none";
        secondImage.style.display = "block";
        leftBtn.style.opacity = "100";
        btncount++;
    } else if (btncount == 2){
        secondImage.style.display = "none";
        thirdImage.style.display = "block";
        rightBtn.style.opacity = "0";
        btncount++;
    }
})

leftBtn.addEventListener("click", ()=>{
    if(btncount == 2){
        firstImage.style.display = "block";
        secondImage.style.display = "none";
        leftBtn.style.opacity = "0";    
        btncount--;
    } else if(btncount == 3){
        secondImage.style.display = "block";
        thirdImage.style.display = "none";
        rightBtn.style.opacity = "100";
        btncount--;
    }
})