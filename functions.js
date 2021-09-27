// const factorial = (n) => {
//     if ((n===0) || (n===1)) {
//         return 1;
//     } else {
//         return (n*factorial(n-1));
//     }
// }

// console.log(factorial(33));

// let orderCount = 0;

// const takeOrder = (topping, side) => {
//     console.log(`Pizza with ${topping} and ${side}.`);
//     orderCount++;
// }
// takeOrder("Pinapple", "wedges");
// takeOrder("meat feast", "coleslor");
// takeOrder("veg supreme", "fries");

// console.log(orderCount);

let reverseString = (str) => {
    return str.split("").reverse().join("");
}
console.log(reverseString("jamil"));