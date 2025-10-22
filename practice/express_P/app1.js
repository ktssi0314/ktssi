const express = require('express')
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
const index1Router1 = require('../routes1/index1');
const user1Router1 = require('../routes1/user1');
const user2Router2 = require('../routes1/user2');

//dotenv.config(); 기존에 있던 놈의 포트번호를 저장 그래서 내가 전꺼 코드 3000이 저장 됐었음

const app1 = express(); // 생성자 createServer



app1.use(morgan('dev')); // 쓰려면 위에다가 패키지 추가 , 이게 뭔 역할이냐 -> 요청 메서드 요청 상태 이런걸 알려줌

app1.set('port', process.env.PORT || 8081); // 포트 번호

app1.use((req, res, next) => {
    console.log('모든 요청에 다 실행됩니다.');
    next();

});

app1.use('/', index1Router1);
app1.use('/user', user1Router1);
app1.use('/user1', user2Router2);

/*
app1.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index1.html'));
})
*/



app1.use((req,res,next) => {
    res.status(404).send('Not Found');
})


app1.use((err, req, res, next) => {  
    console.error(err);
    res.status(500).send(err.message);
})



app1.listen(app1.get('port'), () => {
    console.log(app1.get('port'), '번 포트에서 대기 중');
});





