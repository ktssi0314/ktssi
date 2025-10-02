/*function first(){
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


var sayNode = function(){
    console.log('Node');
};


var A = 'ES';
var oldObject = {
    sayJs: () => {
        console.log('JS');
    },
    sayNode: sayNode,
    
};

oldObject[A + 6] = 'Fantastic';


oldObject.sayNode();
oldObject.sayJs();
console.log(oldObject.ES6);

sayNode();



var relationship1 = {
    name: '김태석',
    friends: ['김승현', '서동민', '박제학'],
    add : ['한누리관', '송백관'],

    logFriends: function (){
        var that = this;
        this.friends.forEach((friend) =>{
            this.add.forEach((addlist) =>{
                console.log(that.name, friend, addlist);
            });
            
        });
    },

};
relationship1.logFriends();


var candyM = {
    status: {
        name : 'node',
        count : 5,
    },

    getCandy : function(){
        this.status.count--;
        return this.status.count;
    },
}

//var getCandy = candyM.getCandy.count;
//var count = candyM.status.count;

//candyM.getCandy();
console.log(candyM.status.count);
var result = candyM.getCandy();

console.log(candyM.getCandy);
console.log(result);
console.log(candyM.status.count);

//console.log(result);





console.log(count);

 count =- 5;
count = count - 5;

result = count -5; 


var array = ['a','b','c'];
var A = array[0];

var C = array[2];

const array = ['a','b','c'];
const [A, C] = array;




const condition = false;
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
    .catch((error) =>{
        console.error(error);
    })
    .finally(() =>{
        console.log('무조건');
    });




function findAndSaveUser(Users){
    Users.findOne({})
        .then((user) =>{
            user.name = 'zero';
            return user.save();
        })
        ,then((user) => {
            return Users.findOne({gender: 'm'});
        })
        .then((user) =>{
            
        })
        .catch(err => {
            console.error(err);
        });
}


async function findAndSaveUser(Users){

    try{
    let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender: 'm'});
    }

    catch(err){
        console.error(err);
    }
        

}


const axios = require('axios');

axios.get('https://www.zerocho.com/api/get')
  .then((result) => {
    console.log(result);
    console.log(result.data);
  })
  .catch((error) => {
    console.error(error);
  });

(async () => {
  try {
    const result = await axios.get('http://www.zerocho.com/api/get');
    console.log(result);
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
})();

(async () => {
  try {
    const result = await axios.post('http://www.zerocho.com/api/post/json', {
      name: 'zerocho',
      birth: 1994,
    });
    console.log(result);
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
})();



(async () => {
    try{
        const formData = new FormData();
        formData.append('name', 'zerocho');
        formData.append('birth', 1994);
        const result = await axios.post('https://www.zerocho.com/api/post/formdata', formData);
        console.log(result);
        console.log(result.data);
    }catch(error){
        console.error(error);
    }
})();


(async () => {
    try {
        const result = await axios.get(`https://www.zerocho.com/api/search/ {$encodeURLComponent('노드')}`);
        console.log(result);
        console.log(result.data);
    }catch(error){
        console.error(error);
    }
})();
*/














