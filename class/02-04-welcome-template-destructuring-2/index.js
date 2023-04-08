function getWelcomeTemplate({ my_name, my_age, my_school, my_createdAt }) {
    const result = `
        <html lang="ko">
            <body>
                <h1>${my_name}님 가입을 환영합니다!</h1>
                <hr/>
                <div>이름: ${my_name}</div>
                <div>나이: ${my_age}</div>
                <div>학교: ${my_school}</div>
                <div>가입일: ${my_createdAt}</div>
            </body>
        </html>
    `
    console.log(result)
}


    const my_name = '하니';
    const my_age = 30;
    const my_school = '지리산고등학교';
    const my_createAt = '2023-04-07';


getWelcomeTemplate({my_name: "하니", my_age: 30, my_school: "지리산 고등학교", my_createdAt: "2023-04-07"});