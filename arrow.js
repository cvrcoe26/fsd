// create a file named arrow.js and put the following code in it
// run the following command to run the code
// node arrow.js


let arr = [5, 10, 15, 20, 25, 30];
let doubled = arr.map(n => n * 2);
console.log(doubled);
let filtered = doubled.filter(n => n > 20);
console.log(filtered);

let countVowels = s => (s.match(/[aeiou]/gi) || []).length;
// let countVowels = str => {
//     let vowels = 'aeiouAEIOU';
//     let count = 0;
//     for (let char of str) {
//       if (vowels.includes(char)) {
//         count++;
//       }
//     }
//     return count;
//   };
console.log(countVowels("hello world"));
