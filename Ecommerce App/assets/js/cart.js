const price = document.querySelectorAll("#price"),
total = document.querySelectorAll("#total"),
quantity = document.querySelectorAll("#quantity"),
products = document.querySelectorAll(".product");

for(let i = 0; i < products.length; i++){
    quantity[i].addEventListener("change", function(){
        let originalValue = this.previousElementSibling.innerText;
        let parsedPrice = Number.parseInt(originalValue.slice(1, 4));
        const newValue = this.value;
        const newPrice = "$"+(newValue * parsedPrice);
        // const newPrice = newValue * parsedPrice;
        let totalContainer = this.nextElementSibling;
        totalContainer.innerText = newPrice;
    })

}