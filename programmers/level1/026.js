// 찍수와 홀수 - 연습문제
const num = 12

function solution(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log('num은 짝수인가? 홀수인가?',solution(num))