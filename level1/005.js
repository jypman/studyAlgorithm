// 2016년 - 연습문제
const a = 5
const b = 5

function solution(a, b) {
    const date = new Date(2016,a-1,b).getDay()
    const getDay = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    return getDay[date];
}

console.log('2016년 a월 b일은 무슨 요일?:', solution(a, b))