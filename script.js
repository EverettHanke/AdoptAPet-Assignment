alert("Connected");


let button = document.getElementById("submit");

button.onclick = function()
{
    let animal = document.getElementById("pet").value;
    let quantity = document.getElementById("quantity").value;
    let color = document.getElementById("color").value;
    document.getElementById("orderDetails").innerHTML = "Animal: " + animal + ", Quantity: " + quantity + ", Color: " + color;
}