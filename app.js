var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");
var product1 = document.getElementById("product1");

var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");
var product2 = document.getElementById("product2");

var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");
var product3 = document.getElementById("product3");

var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");
var product4 = document.getElementById("product4");

var qty5 = document.getElementById("qty5");
var price5 = document.getElementById("price5");
var product5 = document.getElementById("product5");

var qty6 = document.getElementById("qty6");
var price6 = document.getElementById("price6");
var product6 = document.getElementById("product6");


var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    carts.textContent = "";

    if (parseFloat(qty1.value) > 0) {
        var order = qty1.value + 'pc/s x' + product1.textContent + " - Php " + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + "\n";
        carts.textContent += order;
    }

    if (parseFloat(qty2.value) > 0) {
        var order = qty2.value +  'pc/s x'  + product2.textContent + " - Php " + (parseFloat(qty2.value) * parseFloat(price2.textContent)) + "\n";
        carts.textContent += order;
    }

  if (parseFloat(qty3.value) > 0) {
        var order = qty3.value +  'pc/s x'  + product3.textContent + " - Php " + (parseFloat(qty3.value) * parseFloat(price3.textContent)) + "\n";
        carts.textContent += order;
    }

    if (parseFloat(qty4.value) > 0) {
        var order = qty4.value +  'pc/s x'  + product4.textContent + " - Php " + (parseFloat(qty4.value) * parseFloat(price4.textContent)) + "\n";
        carts.textContent += order;
    }

   if (parseFloat(qty5.value) > 0) {
        var order = qty5.value +  'pc/s x' + product5.textContent + " - Php " + (parseFloat(qty5.value) * parseFloat(price5.textContent)) + "\n";
        carts.textContent += order;
    }

    if (parseFloat(qty6.value) > 0) {
        var order = qty6.value +  'pc/s x'  + product6.textContent + " - Php " + (parseFloat(qty6.value) * parseFloat(price6.textContent)) + "\n";
        carts.textContent += order;
    }
}

function calculateTotal() {
    var totalAmount = 0;

    if (parseFloat(qty1.value) > 0) {
        totalAmount += parseFloat(qty1.value) * parseFloat(price1.textContent);
    }

    if (parseFloat(qty2.value) > 0) {
        totalAmount += parseFloat(qty2.value) * parseFloat(price2.textContent);
    }

    if (parseFloat(qty3.value) > 0) {
        totalAmount += parseFloat(qty3.value) * parseFloat(price3.textContent);
    }

    if (parseFloat(qty4.value) > 0) {
        totalAmount += parseFloat(qty4.value) * parseFloat(price4.textContent);
    }

    if (parseFloat(qty5.value) > 0) {
        totalAmount += parseFloat(qty5.value) * parseFloat(price5.textContent);
    }

    if (parseFloat(qty6.value) > 0) {
        totalAmount += parseFloat(qty6.value) * parseFloat(price6.textContent);
    }

    total.value = "Total: Php " + totalAmount.toFixed(2);

    if (parseFloat(cash.value) >= totalAmount) {
        change.value = "Change: Php " + (parseFloat(cash.value) - totalAmount).toFixed(2);
    } else {
        change.value = "Insufficient cash!";
    }
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);
