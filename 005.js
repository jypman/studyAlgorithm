// 2016년 - 연습문제
const a = 5
const b = 5

function solution(a, b) {
    const date = new Date(2016,a-1,b).getDay()
    const getDay = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    return getDay[date];
}

console.log(solution(a, b))