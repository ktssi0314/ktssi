// routes/404.js
// 이 파일은 실제 라우터가 아닌 에러 처리 미들웨어 역할만 수행합니다.

// 자료의 '404 미들웨어' 개념을 적용 (err를 받지 않는 일반 미들웨어 형태)
const notFoundMiddleware = (req, res, next) => {
    // 404 미들웨어는 가장 아래에 위치해야 합니다.
    // res.status 메서드로 HTTP 상태 코드를 지정 가능 (기본값 200)
    res.status(404).send('<h1>404 Not Found!!!!</h1><p>요청하신 페이지를 찾을 수 없습니다.</p>');
};

module.exports = notFoundMiddleware;