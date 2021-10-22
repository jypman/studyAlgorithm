// 약수의 합 - 연습문제
const n = 12

// function solution(n) {
//     let divisorList = [],
//         answer = 0
//     for (let i = 1; i <= n; i++) {
//         n % i === 0 && divisorList.push(i);
//     }
//     for (let elem of divisorList) {
//         answer += elem
//     }
//     return answer;
// }

function solution(n) {
    let answer = 0
    for (let i = 1; i <= n; i++) {
        if(n % i === 0) answer += i
    }
    return answer;
}

console.log('각 약수들의 합은 ?', solution(n))