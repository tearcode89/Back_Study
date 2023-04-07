console.log('오늘 우리는 우리의 루틴대로 살고있ㅇ')

function getToken(digit) {
    return String(Math.floor(Math.random() * 10 ** digit)).padStart(digit, '0');
}

console.log(getToken(4))