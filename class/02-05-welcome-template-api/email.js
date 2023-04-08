import {getToday} from "./utils.js";

export function checkValidationEmail(Email) {
    if(Email === undefined && !Email.includes("@")){
        return false;
    } else {
        return true;
    }
}

export function getWelcomeTemplate({name, age, school}) {


    return `
        <html lang="ko">
            <body>
                <h1>${name}님 가입을 환영합니다!</h1>
                <hr/>
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `;
}

export function sendTemplateToEmail(email, myTemplate) {
    console.log(`${email}로 ${myTemplate} 메세지를 전송합니다.`)
}