/*
// 서버 만들기 1번째 ----------------------------------------------------------------
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>안녕 애들아</h1>');
    res.end('<p>하이</p>');
})

    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중입니다.');
    })



// 객체와 .on을 사용해 만든 서버 만들기 2번째 -----------------------------------------
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>뭐해</h1>');
    res.end('<p>넌 뭐하는데</p>');
})

// 정상적으로 포트를 열고 대기 상태가 됐을 때 밑에 on 이벤트가 실행됨
server.listen(8080);

server.on('listening', () => { // listening 이거 실제로 정해진 이름임 꼭 써야 함
    console.log('8080번 포트에서 서버 대기 중!');
})

server.on('err', (error) => {
    console.error(error);
})



// 서버 2개 만들기 그냥 다른 객체 하나 더 만듦

const http = require('http');

const server1 = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>서버1 등장</h1>');
    res.end('<p>야 뭐하는데</p>');
})

const server2 = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>서버2 등장</h1>');
    res.end('<p>뭐하긴 뭐해 니</p>');
})


server1.listen(8080);
server1.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다');
})
server1.on('error', () => {
    console.error(error);
})

server2.listen(8081);
server2.on('listening', () => {
    console.log('8081번 포트에서 서버 대기 중입니다');
})
server2.on('error', () => {
    console.error(error);
})
*/

const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try{
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);

    } catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})

    .listen(8081, () => {
        console.log('8081번 포트에서 서버 대기 중입니다!');
    })



