"use strict";

/*
Jwala Khatri
April 26, 2020
Shopping cart Array
Semester Project: JavaScripts Arrays
*/

var subtotal = 0;
var cartHTML = "<table><thead><tr><th>Item Description</th><th>Price</th><th>Qty</th><th>Total</th></tr></thead><tbody>";

for (var i=0; i < item.length; i++)
{
    cartHTML += "<tr><td>" + item[i] + "</td>"; 
    cartHTML += "<td>$" + price[i] + "</td>"; 
    cartHTML += "<td>" + qty[i] + "</td>";
    var cost = price[i] * qty[i]; 
    cartHTML += "<td>$" + cost + "</td></tr>"
    subtotal += cost;
} // for loop

var shipCost = Math.round(subtotal*0.05);
var orderTotal = subtotal + shipCost;
shipCost += ".00";

cartHTML += "</tbody><tfoot>";
cartHTML += "<tr><td colspan = '3'>Subtotal</td><td>$" + subtotal + "</td></tr>";
cartHTML += "<tr><td colspan = '3'>Shipping</td><td>$" + shipCost + "</td></tr>";
cartHTML += "<tr><td colspan = '3'>Total Cost</td><td>$" + orderTotal + "</td></tr>";
cartHTML += "</tfoot></table>"; // close tfood and table

document.getElementById("cart").innerHTML = cartHTML

var now = new Date();
var shipDays = now.getDate() + 3;
now.setDate(shipDays);

document.getElementById("sdate").innerHTML = "* Orders placed today will be shipped by " + now







