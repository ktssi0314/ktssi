const {odd, even} = require('./var1.js');

function checkOddOrEven(num) {
    if(num%2){
        return odd;
    }
    else{
        return even;
    }
}

function A() {
    return global.message;
}

module.exports = {
    checkOddOrEven,
    A,
}

