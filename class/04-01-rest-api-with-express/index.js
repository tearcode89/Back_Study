import express from 'express';

const app = express();
const port = 3000;

app.get('/' , (req,res) => {
    res.send(`하루를 소중히 여기는 당신 반갑습니다`)
})

app.listen(port, () => {
    console.log(`이 앱은 ${port} 포트를 사용하고 있습니다.`)
})