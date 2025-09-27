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
*/







