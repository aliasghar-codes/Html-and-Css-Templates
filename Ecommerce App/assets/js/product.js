const minusBtn = document.querySelector(".quantity .decrement"),
numberContainer = document.querySelector(".quantity .number"),
plusBtn = document.querySelector(".quantity .increment"),
imagesContainer = document.querySelector(".product-images-container"),
productImage = document.querySelector(".product-left > img");


plusBtn.addEventListener("click", () => {
    initialQuantity = Number.parseInt(numberContainer.innerHTML);
    initialQuantity++;
    numberContainer.innerHTML = initialQuantity;
});

minusBtn.addEventListener("click", () => {
    initialQuantity = Number.parseInt(numberContainer.innerHTML);
    if(initialQuantity > 1){
    initialQuantity--;
    numberContainer.innerHTML = initialQuantity;
    }
});

imagesContainer.addEventListener("click", e => {
    if(e.target.tagName === "IMG"){
        productImage.src = e.target.src;
    }
})