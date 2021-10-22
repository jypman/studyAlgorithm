// 자릿수 더하기 - 연습문제
const n = 432

function solution(n) {
    let total = 0
    for (let i = 0; i < String(n).length; i++) {
        total += Number(String(n)[i])
    }
    return total;
}

console.log('각 자릿수의 합은?',solution(n))