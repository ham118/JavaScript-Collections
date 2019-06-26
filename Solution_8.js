'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  var charArray = [];
  var vowelArray = ['a','e','i','o','u'];
  var charArrayOfVowel = [];
  var charArrayOfConsonant = [];

  charArray = s.split('');

  charArray.forEach(function(char) {
    if (vowelArray.includes(char)) {
      charArrayOfVowel.push(char);
    } else {
      charArrayOfConsonant.push(char);
    }
  });

 charArrayOfVowel.forEach(function(char) {console.log(char)});
 charArrayOfConsonant.forEach(function(char) {console.log(char)});
}
