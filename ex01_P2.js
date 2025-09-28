/*
let sayNode = function(){
    console.log('Node');
}

let es = 'ES';

let oldObject = {
    sayJS : function(){
        console.log('JS');
    },
    A : sayNode, // 실험하려고 바꿔봄
    sayNode, // sayNode : sayNode -> sayNode 축약 가능
    [es + 6] = 'Fantastic', // 얘도 객체 안에 넣을 수 있음 왕 편함
};

oldObject[es + 6] = 'Fantastic';


oldObject.sayJS();
oldObject.A();
console.log(oldObject.ES6);



var relationship1 = {
    name : '태석',
    friends : ['승현', '동민', '제학'],
    add : ['엙', '앍'],
    logFriends : function(){
        var that = this;
        this.friends.forEach((friend) => {
            this.add.forEach((hehe) => {
                console.log(that.name, friend, hehe);
            })
            
        });
    },
};
relationship1.logFriends();


var candyMachine = {
    status : {
        name: 'Node',
        count : 5,
    },
    getCandy: function(){
        this.status.count--;
        return this.status.count;
    },
};


//var getCandy = candyMachine.getCandy;
//var count = candyMachine.status.count;

// 위 아래 둘 중 하나만 써야 함

const {getCandy, status:{count}} = candyMachine;
console.log(candyMachine.getCandy());
console.log(candyMachine.status.count);
console.log(count)



var array = ['A', {}, 'C', 'D'];
var node = array[0];
var obj = array[1];
var alpa = array[3];

// 위에 인덱스로 저장한거로 쓰거나 밑에 구조분해할당 쓰거나 둘 중 하나만 써야 함 둘 다 쓰면 오류 뜸 

const[node, obj, , alpa] = array; 


console.log(node);




const condition = true;
const promise = new Promise((resolve, reject) =>{ // Promise 가 준 함수 내가 만든 함수가 아님 근데 이름은 바꿀 수 있음 그냥 예외라고 생각 ㄱㄱ
    if(condition){
        resolve('성공'); // 함수 호출
    }else{
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('무조건');
    })


promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.error(error);
    })




function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => {
        if(err){
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => {
            if(err){
                return console.error(err);
            }
            Users.findOne({gender:'m'}, (err,user) => {
                //교수님 자료에서는 생략 되어 있음
            })
        })
    })
}



function findAndSaveUser(Users){
    Users.findOne({})
    .then((user) => {
        user.name = 'zero';
        return user.save();
    })
    .then((user)=> {
        return Users.findOne({gender:'m'});
    })
    .then((user)=>{
        //생략
    })
    .catch((err) => {
        console.error(err);
    })
}


async function findAndSaveUser(Users){
    try{
        let user = await Users.findOne({});
        user.name = 'zero'; // 그냥 단순 동기 할당이라 promise가 아님
        user = await user.save();
        user = await Users.findOne({gender:'m'});
    }catch(error) {
        console.error(error);
    }
}


 const findAndSaveUser = async (Users) => {
    try{
        let user = await Users.findOne({});
        user.name = 'zero'; // 그냥 단순 동기 할당이라 promise가 아님
        user = await user.save();
        user = await Users.findOne({gender:'m'});
    }catch(error) {
        console.error(error);
    }
}



const promise1 = Promise.resolve('성공');
const promise2 = Promise.reject('실패');

Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
*/


const promise1 = Promise.resolve('성공');
const promise2 = Promise.resolve('성공');

(async () => {
    for await (promise of [promise1, promise2]){
        console.log(promise);
    }
})();


