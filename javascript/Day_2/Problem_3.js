
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", function (input) {
    const numbers = input.trim().split(/\s+/).map(Number);

    const uniqueNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (!uniqueNumbers.includes(numbers[i])) {
            uniqueNumbers.push(numbers[i]);
        }
    }

    console.log("Array without duplicates:", uniqueNumbers);

    rl.close();
});
