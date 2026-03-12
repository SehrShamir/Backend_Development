const { addToCart, changeQty } = require("./cartModule")

// const require = require("./cartModule")
console.log("Welcome to Backend Project")
console.log(10 + 50)
let l = [10, 20, 30, 50, 60]
l.forEach((value, index) => {
    console.log(value, index);
})
console.log("welcome")
console.log(addToCart())
console.log(changeQty())
