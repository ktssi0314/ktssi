// app.js

const express = require('express');

// 1. 라우터 파일 require
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const userIdRouter = require('./routes/user_id');
const notFoundMiddleware = require('./routes/404'); // 404 미들웨어 require


const app = express();

app.set('port', process.env.PORT || 3000);

// 2. 미들웨어 장착 (라우터 연결)
// '/' 주소로 들어오는 요청은 indexRouter가 처리
app.use('/', indexRouter); 
// '/user'로 시작하는 요청은 userRouter가 처리
app.use('/user', userRouter);
// '/user'로 시작하는 요청 중 ':id' 패턴을 포함하는 요청은 userIdRouter가 처리
app.use('/user', userIdRouter);



// 3. 404 미들웨어 연결 (자료의 '404 미들웨어' - 가장 아래에 위치)
app.use(notFoundMiddleware);

// 4. 서버 실행
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});