// routes/user_id.js
const express = require('express');
const router = express.Router();

// 라우트 매개변수 :id 사용 (자료의 ':id를 넣으면 req.params.id로 받을 수 있음' 개념)
router.route('/:id')
    // GET /user/:id (특정 사용자 조회 - Read)
    .get((req, res) => {
        const userId = req.params.id; // req.params.id로 값 접근
        res.send(`<h1>ID가 ${userId}인 사용자 정보 조회 (GET /user/${userId})</h1>`);
    })
    // PATCH /user/:id (사용자 수정 - Update)
    .patch((req, res) => {
        const userId = req.params.id;
        // PATCH: 서버 자원의 일부만 수정하고자 할 때 사용 (자료 참고)
        res.send(`<h1>ID가 ${userId}인 사용자 정보 수정 (PATCH /user/${userId})</h1>`);
    })
    // DELETE /user/:id (사용자 삭제 - Delete)
    .delete((req, res) => {
        const userId = req.params.id;
        // DELETE: 서버의 자원을 삭제하고자 할 때 사용 (자료 참고)
        res.send(`<h1>ID가 ${userId}인 사용자 정보 삭제 (DELETE /user/${userId})</h1>`);
    });

module.exports = router;