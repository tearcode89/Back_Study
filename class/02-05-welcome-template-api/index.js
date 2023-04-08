import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from "./email.js"
function createUser(user) {

    const isValid = checkValidationEmail(user.email);
    // 1. 이메일이 정상인지 확인(1. 존재여부, 2. "@" 포함여부)
    if(isValid) {

        // 2. 가입환영 템플릿 만들기``
        const mytemplate = getWelcomeTemplate(user)

        // 3. 이메일에 가입환영 템플릿 전송하기
        sendTemplateToEmail(user.email,mytemplate)
    }
}

const myuser = {
    name: "지수",
    age: "28",
    school: "과천중앙고등학교",
    email: "jisoo@gmail.com"
}

createUser(myuser)