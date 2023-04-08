
export function getToday() {
    const dateInfo = new Date();
    const year = dateInfo.getFullYear();
    const month = dateInfo.getMonth()+1
    const day = dateInfo.getDate();
    const today = `${year}년 ${month}월 ${day}일`
    return today;
}



