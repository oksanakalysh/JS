
//1. Write a script that will calculate and display the result of raising 2 to the power of 10, starting from the power of 1
const number = 2;
let i = 1;
for (i = 1; i < 11; i++)
{
    console.log(number**i)
}

// 1*. Convert 1 task into a function that takes as input the power to which the number 2 will be raised
const pow = function(num){
    return Math.pow(2, num);
}
    console.log(pow(10))

//  2. Write a script that will output 5 lines to the console in such a way that :) is displayed on the first line, :) :) on the second line, and so on
// Console example:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

mm = [':)', ':):)', ':):):)', ':):):):)', ':):):):):)']
for (let i=0; i < 5; i++){
    console.log(mm[i])
}

// 2*.Convert task 2 into a function that takes a string as input, which will be output to the console (as in the smiley condition), as well as the number of lines to output
// e.g. function printSmile(stroka, numberOfRows)

function printSmile (stroka, numberOfRows) {
    let result = ''
    for (let i=0; i<=numberOfRows; i++) {
        result+=stroka
    console.log(result);
    }
}

printSmile(':)', 4)

//3**. Write a function that takes a word as input. The task of the function is to calculate and output to the console how many vowels and how many consonants are in the word.
// e.g. function getWordStructure(word)
// In console:
// The word (word) consists of (number) vowels and (number) consonants

// Checks: 'case', 'Case', 'Check-list'

{console.log('Number of vowels in the word "word":' + ' ' + getWordStructure('word'));
function getWordStructure(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
       if (vowels.includes(char))
            count += 1;
    }
    return count;
}}
{console.log('Number of consonants in the word "word":' + ' ' + getWordStructure('word'));
function getWordStructure(str) {
    let count = 0;
        const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    for (let char of str.toLowerCase()) {
        if (consonants.includes(char)) 
            count += 1;
    }
    return count;
}}

// 4**. Write a function that checks if a word is a palindrome
// e.g. function isPalindrom(word)
// Checks: 'abba', 'Abba'

function isPalindrome(word) {
let characters = word.split('');
let isPalindrome = true;

for (let index = 0; index < characters.length; index++) {
    const element = characters[index];

    if(element !== characters[characters.length - 1 - index]) {
    isPalindrome = false;
}
}

return isPalindrome;
};

console.log(isPalindrome("word"));
console.log(isPalindrome("abba"));
