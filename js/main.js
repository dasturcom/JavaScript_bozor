var elShoppingForm = document.querySelector(".shopping-form");
var elShoppingInput = document.querySelector(".shopping-input");
var elShoppingList = document.querySelector(".shopping-list");

var products = [];

elShoppingForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    
    var addShoppingInput = elShoppingInput.value;

    products.push(addShoppingInput);
    
    elShoppingList.textContent = "";
    
    for (var product of products) {
        var liElement = document.createElement("li");
        liElement.textContent = product;
        
        elShoppingList.appendChild(liElement);
        elShoppingInput.value = "";
    }
    
})

                                        // =============== CH E C K =============== //

var elShoppingCheckForm = document.querySelector(".shopping-check-form");
var elShoppingCheckInput = document.querySelector(".shopping-check-input");
var elCheckResult = document.querySelector(".check-result");

elShoppingCheckForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    
    var checkInputValue =  elShoppingCheckInput.value;

    var there = products.includes(checkInputValue);
    
    elShoppingList.textContent = "";
    
    if (there) {
        elCheckResult.textContent = "B O R";
    } else {
        elCheckResult.textContent = "Y O' Q";
    }

    elShoppingCheckInput.value = "";    
    elShoppingInput.focus();
    
})