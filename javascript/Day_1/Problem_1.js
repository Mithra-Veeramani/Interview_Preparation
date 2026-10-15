const sentence = "I am learning JavaScript programming";
const words = sentence.split(" ");

let longestWord = "";

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}

console.log("Longest word:", longestWord);
