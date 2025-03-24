function changeCoffeePrice(){
    // var userName = prompt("What is your name?")
    var header = document.getElementById("testMenu")
    // 1. ask q 2. set header's innerhtml in user's response
    var newHeaderText = prompt("What should the header say?")
    header.innerHTML = newHeaderText;


    var coffeePrice = document.getElementById("newPrice")
    var coffeeCost = prompt("How much should the coffee be?")
    coffeePrice.innerHTML = coffeeCost;
    // alert(header.innerHTML)
}
