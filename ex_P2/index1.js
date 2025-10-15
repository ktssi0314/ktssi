const {odd, even} = require('./var1.js');
const {checkOddOrEven, A} = require('./func1.js');

function checkStringOddEven(str) {
    if(str.length % 2){
        return odd;
    }
    else {
        return even;
    }
}

global.message = '하이여';

console.log(A());

console.log(checkOddOrEven(10));
console.log(checkStringOddEven('hello'));