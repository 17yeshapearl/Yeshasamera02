
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

var qty7 = document.getElementById("qty7");
var price7 = document.getElementById("price7");
var product7 = document.getElementById("product7");

var qty8 = document.getElementById("qty8");
var price8 = document.getElementById("price8");
var product8 = document.getElementById("product8");

var qty9 = document.getElementById("qty9");
var price9 = document.getElementById("price9");
var product9 = document.getElementById("product9");

var qty10 = document.getElementById("qty10");
var price10 = document.getElementById("price10");
var product10 = document.getElementById("product10");

var qty11 = document.getElementById("qty11");
var price11 = document.getElementById("price11");
var product11 = document.getElementById("product11");

var qty12 = document.getElementById("qty12");
var price12 = document.getElementById("price12");
var product12 = document.getElementById("product12");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    carts.textContent = "";

    if (parseFloat(qty1.value) > 0) {
        var order = qty1.value + " x " + product1.textContent + " - Php " + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + "\n";
        carts.textContent += order;
    }

    if (parseFloat(qty2.value) > 0) {
        var order = qty2.value + " x " + product2.textContent + " - Php " + (parseFloat(qty2.value) * parseFloat(price2.textContent)) + "\n";
        carts.textContent += order;
    }

  if (parseFloat(qty3.value) > 0) {
        var order = qty3.value + " x " + product3.textContent + " - Php " + (parseFloat(qty3.value) * parseFloat(price3.textContent)) + "\n";
        carts.textContent += order;
    }

    if (parseFloat(qty4.value) > 0) {
        var order = qty4.value + " x " + product4.textContent + " - Php " + (parseFloat(qty4.value) * parseFloat(price4.textContent)) + "\n";
        carts.textContent += order;
    }

   if (parseFloat(qty5.value) > 0) {
        var order = qty5.value + " x " + product5.textContent + " - Php " + (parseFloat(qty5.value) * parseFloat(price5.textContent)) + "\n";
        carts.textContent += order;
    }

    if (parseFloat(qty6.value) > 0) {
        var order = qty6.value + " x " + product6.textContent + " - Php " + (parseFloat(qty6.value) * parseFloat(price6.textContent)) + "\n";
        carts.textContent += order;
    }

   if (parseFloat(qty7.value) > 0) {
        var order = qty7.value + " x " + product7.textContent + " - Php " + (parseFloat(qty7.value) * parseFloat(price7.textContent)) + "\n";
        carts.textContent += order;
    }

    if (parseFloat(qty8.value) > 0) {
        var order = qty8.value + " x " + product8.textContent + " - Php " + (parseFloat(qty8.value) * parseFloat(price8.textContent)) + "\n";
        carts.textContent += order;
    }

   if (parseFloat(qty9.value) > 0) {
        var order = qty9.value + " x " + product9.textContent + " - Php " + (parseFloat(qty9.value) * parseFloat(price9.textContent)) + "\n";
        carts.textContent += order;
    }

    if (parseFloat(qty10.value) > 0) {
        var order = qty10.value + " x " + product2.textContent + " - Php " + (parseFloat(qty10.value) * parseFloat(price10.textContent)) + "\n";
        carts.textContent += order;
    }

  if (parseFloat(qty11.value) > 0) {
        var order = qty11.value + " x " + product11.textContent + " - Php " + (parseFloat(qty11.value) * parseFloat(price11.textContent)) + "\n";
        carts.textContent += order;
    }

    if (parseFloat(qty12.value) > 0) {
        var order = qty12.value + " x " + product12.textContent + " - Php " + (parseFloat(qty12.value) * parseFloat(price12.textContent)) + "\n";
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

    if (parseFloat(qty7.value) > 0) {
        totalAmount += parseFloat(qty7.value) * parseFloat(price7.textContent);
    }

    if (parseFloat(qty8.value) > 0) {
        totalAmount += parseFloat(qty8.value) * parseFloat(price8.textContent);
    }

    if (parseFloat(qty9.value) > 0) {
        totalAmount += parseFloat(qty9.value) * parseFloat(price9.textContent);
    }

    if (parseFloat(qty10.value) > 0) {
        totalAmount += parseFloat(qty10.value) * parseFloat(price10.textContent);
    }

    if (parseFloat(qty11.value) > 0) {
        totalAmount += parseFloat(qty11.value) * parseFloat(price11.textContent);
    }

    if (parseFloat(qty12.value) > 0) {
        totalAmount += parseFloat(qty12.value) * parseFloat(price12.textContent);
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
qty7.addEventListener("keyup", addOrder);
qty8.addEventListener("keyup", addOrder);
qty9.addEventListener("keyup", addOrder);
qty10.addEventListener("keyup", addOrder);
qty11.addEventListener("keyup", addOrder);
qty12.addEventListener("keyup", addOrder);
cash.addEventListener("keyup", calculateTotal);
        
