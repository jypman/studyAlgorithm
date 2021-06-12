// 두 정수 사이의 합 - 연습문제
const a = 3
const b = 7

// function solution(a, b) {
//     let answer = 0;
//     for (let i = Math.min(a,b); i <= Math.max(a,b); i++) {
//         answer += i
//     }
//     return answer;
// }

// '가우스 등차수열의 합' 공식
function solution(a, b) {
    return (a+b)*(Math.abs(b-a)+1)/2;
}

console.log('두 장수 사이의 합 :',solution(a ,b))