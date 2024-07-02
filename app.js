var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");  
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var product3 = document.getElementById("product3");
var qty3 = document.getElementById("qty3");  
var price3 = document.getElementById("price3");

var product4 = document.getElementById("product4");
var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");

var product5 = document.getElementById("product5");
var qty5 = document.getElementById("qty5");  
var price5 = document.getElementById("price5");

var product6 = document.getElementById("product6");
var qty6 = document.getElementById("qty6");
var price6 = document.getElementById("price6");

var product7 = document.getElementById("product7");
var qty7 = document.getElementById("qty7");  
var price7 = document.getElementById("price7");

var product8 = document.getElementById("product8");
var qty8 = document.getElementById("qty8");
var price8 = document.getElementById("price8");

var product9 = document.getElementById("product9");
var qty9 = document.getElementById("qty9");  
var price9 = document.getElementById("price9");

var product10 = document.getElementById("product10");
var qty10 = document.getElementById("qty10");
var price10 = document.getElementById("price10");

var product11 = document.getElementById("product11");
var qty11 = document.getElementById("qty11");  
var price11 = document.getElementById("price11");

var product12 = document.getElementById("product12");
var qty12 = document.getElementById("qty12");
var price12 = document.getElementById("price12");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");  // Added "=" to correct the syntax

function addOrder() {
    carts.textContent = "";  // Clear the cart content

    if (parseFloat(qty1.value) > 0) {
        var order1 = qty1.value.toString() + " pc/s x " + price1.textContent + " " + product1.textContent + " Php " + (parseFloat(qty1.value) * parseFloat(price1.textContent)).toFixed(2);
        carts.textContent += order1 + "\n";  // Added "\n" to separate orders
    }

    if (parseFloat(qty2.value) > 0) {
        var order2 = qty2.value.toString() + " pc/s x " + price2.textContent + " " + product2.textContent + " Php " + (parseFloat(qty2.value) * parseFloat(price2.textContent)).toFixed(2);
        carts.textContent += order2 + "\n";  // Added "\n" to separate orders
    }
     if (parseFloat(qty3.value) > 0) {
        var order3 = qty3.value.toString() + " pc/s x " + price3.textContent + " " + product3.textContent + " Php " + (parseFloat(qty3.value) * parseFloat(price3.textContent)).toFixed(2);
        carts.textContent += order3 + "\n";  // Added "\n" to separate orders
    }

    if (parseFloat(qty4.value) > 0) {
        var order4 = qty4.value.toString() + " pc/s x " + price4.textContent + " " + product4.textContent + " Php " + (parseFloat(qty4.value) * parseFloat(price4.textContent)).toFixed(2);
        carts.textContent += order4 + "\n";  // Added "\n" to separate orders
    }
     if (parseFloat(qty5.value) > 0) {
        var order5 = qty5.value.toString() + " pc/s x " + price5.textContent + " " + product5.textContent + " Php " + (parseFloat(qty5.value) * parseFloat(price5.textContent)).toFixed(2);
        carts.textContent += order5 + "\n";  // Added "\n" to separate orders
    }

    if (parseFloat(qty6.value) > 0) {
        var order6 = qty6.value.toString() + " pc/s x " + price6.textContent + " " + product6.textContent + " Php " + (parseFloat(qty6.value) * parseFloat(price6.textContent)).toFixed(2);
        carts.textContent += order6 + "\n";  // Added "\n" to separate orders
    }
     if (parseFloat(qty7.value) > 0) {
        var order7 = qty7.value.toString() + " pc/s x " + price7.textContent + " " + product7.textContent + " Php " + (parseFloat(qty7.value) * parseFloat(price7.textContent)).toFixed(2);
        carts.textContent += order7 + "\n";  // Added "\n" to separate orders
    }

    if (parseFloat(qty8.value) > 0) {
        var order8 = qty8.value.toString() + " pc/s x " + price8.textContent + " " + product8.textContent + " Php " + (parseFloat(qty8.value) * parseFloat(price8.textContent)).toFixed(2);
        carts.textContent += order8 + "\n";  // Added "\n" to separate orders
    }
     if (parseFloat(qty9.value) > 0) {
        var order9 = qty9.value.toString() + " pc/s x " + price9.textContent + " " + product9.textContent + " Php " + (parseFloat(qty9.value) * parseFloat(price9.textContent)).toFixed(2);
        carts.textContent += order9 + "\n";  // Added "\n" to separate orders
    }

    if (parseFloat(qty10.value) > 0) {
        var order2 = qty10.value.toString() + " pc/s x " + price10.textContent + " " + product10.textContent + " Php " + (parseFloat(qty10.value) * parseFloat(price10.textContent)).toFixed(2);
        carts.textContent += order10 + "\n";  // Added "\n" to separate orders
    }
     if (parseFloat(qty11.value) > 0) {
        var order11 = qty11.value.toString() + " pc/s x " + price11.textContent + " " + product11.textContent + " Php " + (parseFloat(qty11.value) * parseFloat(price11.textContent)).toFixed(2);
        carts.textContent += order11 + "\n";  // Added "\n" to separate orders
    }

    if (parseFloat(qty12.value) > 0) {
        var order12 = qty12.value.toString() + " pc/s x " + price12.textContent + " " + product12.textContent + " Php " + (parseFloat(qty12.value) * parseFloat(price12.textContent)).toFixed(2);
        carts.textContent += order12 + "\n";  // Added "\n" to separate orders
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

      
