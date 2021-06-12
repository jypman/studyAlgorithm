// 두 정수 사이의 합 - 연습문제
const a = 3
const b = 7

function solution(a, b) {
    if(a === b) return a
    let answer = 0;
    for (let i = a < b ? a : b; a > b ? i <= a : i <= b; i++) {
        answer += i
    }
    return answer;
}

console.log('두 장수 사이의 합 :',solution(a ,b))