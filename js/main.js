var elShoppingForm = document.querySelector(".shopping-form");
var elShoppingInput = document.querySelector(".shopping-input");
var elShoppingBtn = document.querySelector(".shopping-btn");
var elShoppingList = document.querySelector(".shopping-list");

var products = [];

elShoppingBtn.addEventListener("click", function(e) {
    e.preventDefault();
    
    products.push(elShoppingInput.value);
    
    elShoppingList.textContent = ""
    
    for (var product of products) {
        var liElement = document.createElement("li");
        liElement.textContent = product;
        
        elShoppingList.appendChild(liElement);
        elShoppingInput.value = ""
    }
    
})

 