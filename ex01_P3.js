/*

// 객체 리터럴 -------------------------------------------------------------------------------------

var sayNode = () => {
    console.log('Node');
    
};

var A = 'ES';
var oldObject = {
    sayJs: () => {
        console.log('JS');
    },
    sayNode,
    
};

oldObject[A + 6] = 'Fantastic';


oldObject.sayNode();
oldObject.sayJs();
console.log(oldObject.ES6);





// 중첩 forEach  -------------------------------------------------------------------------------------

var relationship1 = {
    name: ['zero', 'one'],
    friends : ['태석', '동민', '승현'],
    add : ['한누리관', '송백관'],
    logFriends: function(){
        this.add.forEach((add) => {
            this.friends.forEach((friend) => {
                this.name.forEach((name) => { 
                    console.log(name, friend, add);
            });
        });
        })
            
    },
};

relationship1.logFriends();



// 구조분해할당 -------------------------------------------------------------------------------------

var candyMachine = {
    status: {
        name : 'node',
        count : 5,
    },

    getCandy : function() {
        this.status.count--;
        return this.status.count;
    },
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// 구조분해할당 ->위 아래 둘 중 하나로 쓰기 -------------------------------------------------------------------------------------

const {getCandy, status:{count}} = candyMachine;




// 배열 구조분해할당 -------------------------------------------------------------------------------------
var array = ['A', {}, 'C', 'D'];
var node = array[0];
var obj = array[1];
var alpa = array[3];

// 위에 인덱스로 저장한거로 쓰거나 밑에 구조분해할당 쓰거나 둘 중 하나만 써야 함 둘 다 쓰면 오류 뜸 

const[node, obj, , alpa] = array; 

console.log(node);





// 프로미스


// 기본적인 프로미스 -------------------------------------------------------------------------------------

const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공');
    } else{
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



// 프로미스 체이닝  -------------------------------------------------------------------------------------

const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공');
    } else{
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message);
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



// 콜벡 헬을 프로미스 체이닝으로 바꾸는 법 -------------------------------------------------------------------------------------

function findAndSaneUser(Users) {
    Users.findOne({}, (err, user) => {
        if(err){
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => {
            if(err){
                return console.error(err);
            }
            Users.findOne({gender: 'm'}, (err, user) => {

            })
        })
    })
}


function findAndSaneUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })

        .then((user) => {
            return Users.findOne({gender : 'm'});
        })
        
        .then((user) => {
            
        })

        .catch((err) => {
            console.error(err);
        })

    }



// 프로미스 배열로 2개를 실행 -------------------------------------------------------------------------------------

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result);
    })

    .catch((error) => {
        console.error(error);
    })



// async await로 promise를 한 번 더 축약 -------------------------------------------------------------------------------------

function findAndSaneUser(Users) {
    Users.findOne({}, (err, user) => {
        if(err){
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => {
            if(err){
                return console.error(err);
            }
            Users.findOne({gender: 'm'}, (err, user) => {

            })
        })
    })
}


async function findAndSaneUser(Users) {

    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender: 'm'}, (err, user));
    } catch(error){
        console.error(error);
    }
}



// 화살표 함수를 사용한 놈도 async await 가능 -------------------------------------------------------------------------------------

async function findAndSaneUser(Users) {

    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender: 'm'}, (err, user));
    } catch(error){
        console.error(error);
    }
}

 const findAndSaneUser = async (Users) => {

    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender: 'm'}, (err, user));
    } catch(error){
        console.error(error);
    }
}
*/




















