// create a file named asyncawait.js and put the following code in it
// run the following command to run the code
// node asyncawait.js


const fs = require('fs');
function findAbsolute(n) {
    return new Promise((res, rej) => {
        if (Math.abs(n) === n) res('Absolute value!!');
        else rej('Invalid');
    });
}
async function findResult(n) {
    try {
        let msg = await findAbsolute(n);
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}
// create a file input.txt and put a number in it
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) return console.log('Error reading file');
  let num = Number(data);
  findResult(num);
});
