//# Practical

//Create a function that takes an array of objects(products) and returns an array of product names where the price is greater than 500.
function price(prod){
    const filtered= prod.filter((product)=>
        product.price>500)
    return filtered.map((product)=>product.name)
}
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 700 },
];
console.log(price(products))