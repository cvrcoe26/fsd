// create a file named symbols.js and put the following code in it
// run the following command to run the code
// node symbols.js



// 1st sub question (to generate unique ids)
let id1 = Symbol('id');
let id2 = Symbol('id');
let user = {
  name: "Alice",
  [id1]: 101,
  [id2]: 102
};
console.log(user);
console.log(user[id1]);
console.log(user[id2]);


// 2nd sub question (use symbols as keys)
let symKey = Symbol('secret');
let obj = {};
obj[symKey] = 'hidden value';
console.log(obj[symKey]);
console.log(symKey in obj);
let keys = Object.getOwnPropertySymbols(obj);
console.log(keys.includes(symKey));


// 3rd sub question (to add metadata)
let meta = Symbol();
let data = { name: "x", [meta]: "hidden" };
console.log(data[meta]);


// 4th sub question (iterable object)
let it = {
    *[Symbol.iterator]() {
      yield 1; 
      yield 2; 
      yield 3;
    }
  };
console.log([...it]);
  