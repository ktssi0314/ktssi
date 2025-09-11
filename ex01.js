/*console.log("Hello World");

function first(){
    second();
    console.log('First');
}
function second(){
    third();
    console.log('Second');
}
function third(){
    console.log('Third');
}



function run(){
    console.log('3초 후 실행');
}


setTimeout(run, 3000);
first();

let a = 1;
a = 0;
const b = 1;
b = 0;


let num1 = 1;
let num2 = 2;
let result = 3;
// 1 + 2 = 3
let str = `${num1} 더하기 ${num2}는 ${result}`;
console.log(str);


const sayNode = function(){
    console.log('Node');
}

let es = 'ES';
const newObj = {
    Func: sayNode, // 새로운 줄 , 빼먹지 않기
    sayJS:function(){ //새로운 :function 지워도 실행됨
        console.log('JS');
    }
}

newObj[es+6] = 'Fantastic';
newObj.Func();
newObj.sayJS();
console.log(newObj.ES6);
*/



var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    add : ['한누리관', '송백관'],
    logFriends: function(){
        var that = this; //relationship1을 가르키는 this를 that에 저장
        this.add.forEach(addlist=>/*(function (addlist) 이걸 해결하기 위해서 => 화살표 함수 사용*/ {
            this.friends.forEach(friend=>/*function(friend)*/{
                console.log(that.name, friend, addlist);
            });
            
        });

    }
}
relationship1.logFriends();