import express from 'express';
import {getToken, sendTokenToSMS, checkValidationPhone} from "./phone.js";
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'

const app = express();
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get('/boards', (req,res) => {
    // 1. 데이터를 조회하는 로직 -> DB에 접속해서 데이터 꺼내오
    const result = [
        { number: 1, writer: "렌고쿠", title: "탄지로 소년", contents: "우마이~~!! " },
        { number: 2, writer: "기유", title: "오니", contents: "우마이~~!! " },
        { number: 3, writer: "네즈코", title: "이이", contents: "우마이~~!! " },
    ]

    // 2. 꺼내온 결과 응답 주기
    res.send(result)
})

app.post('/boards', (req, res) => {
    console.log(req.body)
    const myphone = req.body.aaa

    // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

    // 2. 저장 결과 응답 주기
    res.send("게시물 등록에 성공했어요`")
})

app.post('/tokens/phone', (req,res) => {
    const myphone = req.body.aaa

    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone)
    if(isValid) {
        // 2. 핸드폰 토큰 6자리 만들기
        const mytoken = getToken()

        // 3. 핸드폰번호에 토큰 전송하기
        sendTokenToSMS(myphone, mytoken)

        res.send("인증완료")
    }
})
app.listen(3000, () => {
    console.log(`이 앱은 ${3000}번 포트를 참조하고 있습니다.`)
})