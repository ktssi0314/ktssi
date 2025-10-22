// routes/index.js
const express = require('express');
const router = express.Router();

// GET / 요청 처리
router.get('/', (req, res) => {
    // 실제로는 index.html 등을 전송해야 하지만, 자료만 이용하므로 간단히 텍스트 응답
    res.send('<h1>메인 페이지입니다. 사용자 관리를 원하시면 /user 로 이동하세요.</h1>');
});

module.exports = router;