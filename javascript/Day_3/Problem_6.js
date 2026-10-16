const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a non-negative integer: ", function (input) {
    const number = Number(input);

    if (!Number.isSafeInteger(number) || number < 0) {
        console.log("Please enter a non-negative safe integer.");
    } else {
        let factorial = 1;

        for (let i = 1; i <= number; i++) {
            factorial = factorial * i;
        }

        console.log("Factorial:", factorial);
    }

    rl.close();
});