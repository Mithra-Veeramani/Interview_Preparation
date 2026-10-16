// const sentence = "I am learning JavaScript programming";
// const words = sentence.split(" ");

// let longestWord = "";

// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//     }
// }

// console.log("Longest word:", longestWord);


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", function (sentence) {
    const words = sentence.trim().split(/\s+/);
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    console.log("Longest word:", longestWord);

    rl.close();
});
