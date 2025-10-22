const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
const indexRouter = require('../routes/index');
const userRouter = require('../routes/user');

//이거 실습 시험임 


dotenv.config(); //process.env라는 변수에 저장, 포트라는 놈으로 변수가 저장됨


const app = express(); // 생성자 creatServer 


app.set('port', process.env.PORT || 3000); // 포트번호




app.use(morgan('dev')); // 쓰려면 위에다가 패키지 추가 


app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됩니다.');
    next(); //미들웨어 끝나고 다음으로 넘어가라
});


app.use('/', indexRouter);
app.use('/user', userRouter); // 이렇게 하면 localhost:3000/user 그니깐 user 쓰면 또 다른 곳에 새롭게 접속이 가능 .env를 통해서

app.use((req, res, next) => { // 위에 둘 다 거치지 않았을 때 이걸 처리한다 
    res.status(404).send('Not Found'); 
})
router.post()
router.delete()


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
}) // 파일 열고 바로 에러 발생시키고 그걸 문구로 보여줌


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
})





