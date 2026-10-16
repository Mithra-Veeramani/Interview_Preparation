const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter a string:",function(word){
    let reversed = "";

    for (let i = word.length-1;i>=0;i--){
        reversed = reversed+word[i];
    }
    console.log("Reversed string:",reversed);
    rl.close();
});