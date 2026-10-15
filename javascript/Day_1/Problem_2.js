const word = "level";

let reversed = "";

for(let i= word.length -1;i>=0;i--){
    reversed = reversed+word[i];
}

if(word===reversed){
    console.log(word, "is a palindrome");
}
else{
    console.log(word, "is not a palindrome");
}