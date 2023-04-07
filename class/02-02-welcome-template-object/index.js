function getWelcomeTemplate(user) {
    const result = `
        <html lang="ko">
            <body>
                <h1>${user.my_name}님 가입을 환영합니다!</h1>
                <hr/>
                <div>이름: ${user.my_name}</div>
                <div>나이: ${user.my_age}</div>
                <div>학교: ${user.my_school}</div>
                <div>가입일: ${user.my_createAt}</div>
            </body>
        </html>
    `
    console.log(result)
}

const my_user = {
    my_name: '하니',
    my_age: 30,
    my_school: '지리산고등학교',
    my_createAt: '2023-04-07'
}

getWelcomeTemplate(my_user);