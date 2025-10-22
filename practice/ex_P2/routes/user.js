// routes/user.js
const express = require('express');
const router = express.Router();

// 가상의 사용자 데이터 (데이터베이스 대신 메모리에 임시 저장)
const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

// 라우터 그룹화 (자료의 'router 그룹화' 개념)
router.route('/')
    // GET /user (사용자 조회 - Read)
    .get((req, res) => {
        // GET: 서버 자원을 가져오려고 할 때 사용 (자료 참고)
        res.send(`<h1>사용자 목록 조회 (GET /user)</h1><pre>${JSON.stringify(users)}</pre>`);
    })
    // POST /user (사용자 등록 - Create)
    .post((req, res) => {
        // POST: 서버에 자원을 새로 등록하고자 할 때 사용 (자료 참고)
        // 실제로는 req.body에서 데이터를 받지만, 여기선 임시 데이터 사용
        const newUser = { id: users.length + 1, name: 'NewUser' };
        users.push(newUser); 
        res.status(201).send(`<h1>사용자 등록 성공 (POST /user)</h1><pre>${JSON.stringify(newUser)}</pre>`);
    });

module.exports = router;