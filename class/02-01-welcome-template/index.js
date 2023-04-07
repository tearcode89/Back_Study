function getWelcomeTemplate(name, age, school, createAt) {
    const result = `
        <html lang="ko">
            <body>
                <h1>${name}님 가입을 환영합니다!</h1>
                <hr/>
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createAt}</div>
            </body>
        </html>
    `
    console.log(result)
}

const myname = '하니';
const myage = 30;
const myschool = '지리산고등학교';
const mycreateAt = '2023-04-07'

getWelcomeTemplate(myname, myage, myschool, mycreateAt);