//Create an array named products containing at least three product objects. Each product object should include a name, price, and inventory details.
var products = [
    { name: "Dell",
        item: "laptop",
        price: 100000,
        inventory: {
            stock: 100,
            colorOptions: ["white", "black", "red"]
        } },
    { name: "HP",
        item: "laptop",
        price: 110000,
        inventory: {
            stock: 100,
            colorOptions: ["blue", "black", "purple"]
        } },
    { name: "Lenovo",
        item: "laptop",
        price: 80000,
        inventory: {
            stock: 100,
            colorOptions: ["rosegold", "black", "beige"]
        } }
];
//Implement a function named changeColor that takes a product object and a new color as input. This function should update the color property of the product and adjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).
function changeColor(product, newColor) {
    if (!product.inventory.colorOptions.includes(newColor)) {
        product.inventory.colorOptions.push(newColor);
    }
    switch (newColor) {
        case "red":
            product.price *= 1.10; // Increase by 10%
            break;
        case "blue":
            product.price *= 0.95; // Decrease by 5%
            break;
        default:
            break;
    }
}
//Display each product's name, price, stock, and available colors. Iterate through the products array and print each product's details.
function displayProductDetails(products) {
    products.forEach(function (product) {
        console.log("Name: ".concat(product.name));
        console.log("Price: $".concat(product.price.toFixed(2)));
        console.log("Stock: ".concat(product.inventory.stock));
        console.log("Available Colors: ".concat(product.inventory.colorOptions.join(", ")));
        console.log("----------------------------------");
    });
}
//
changeColor(products[0], "red");
changeColor(products[1], "blue");
//
displayProductDetails(products);
