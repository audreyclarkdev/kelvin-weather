// our starting temp for kelvin. variable will stay constant
const kelvin = 293;

// celsius is 273 degrees less than kelvin. // 20C
const celsius = kelvin - 273;

// equation for calculating F degrees 
let fahrenheit = celsius * (9 / 5) + 32;

// Making sure F is a round number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
