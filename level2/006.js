// 숫자의 표현 - 연습문제(복습 필수) 홀수인 약수의 갯수를 구하면 된다.(수학적 감각이 필요한 듯...)
const n = 15

function solution(n) {
    let CASE = 0
    for (let i = 0; i <= n; i++) {
        if(n % i === 0 && i % 2 !== 0) CASE++
    }
    return CASE
}

console.log('n은 연속된 숫자로 표현하면 몇 가지가 있는가?',solution(n))