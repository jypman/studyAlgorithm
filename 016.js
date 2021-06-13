// 수박수박수박수박수박수 - 연습문제
const n = 5

function solution(n) {
    let answer = '';
    for (let i = 1; i <= n; i++) {
        i % 2 !== 0
            ? answer += '수'
            : answer += '박'
    }
    return answer;
}

console.log('n개의 갯수만큼 수박이 연속되는 문자열 반환하기 :',solution(n))