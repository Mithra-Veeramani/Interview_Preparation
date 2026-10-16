const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an array of 0s and 1s separated by spaces: ", function (input) {
    const numbers = input.trim().split(/\s+/).map(Number);

    let currentCount = 0;
    let maxCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1) {
            currentCount++;

            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        } else {
            currentCount = 0;
        }
    }

    console.log("Maximum consecutive 1s:", maxCount);

    rl.close();
});
