console.log('오늘 우리는 우리의 루틴대로 살고있ㅇ')

function getToken(digit) {
    // undefined
    // null

    if(digit === undefined) {
        console.log(`에러 발생!!! 갯수를 제대로 입력해 주세요!!!`)
        return
    } else if (digit <= 0 ) {
        console.log('에러 발생 !! 갯수가 너무 작습니다.')
        return
    } else if (digit > 10) {
        console.log('에러 발생 !! 갯수가 너무 많습니다.')
        return
    }

    return String(Math.floor(Math.random() * 10 ** digit)).padStart(digit, '0');
}

console.log(getToken(4))