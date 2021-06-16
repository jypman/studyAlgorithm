// 최댓값과 최솟값 - 연습문제
const s = '-1 -2 -3 -4'

function solution(s) {
    const min = Math.min.apply(null, s.split(' '));
    const max = Math.max.apply(null, s.split(' '));
    return `${min} ${max}`
}

console.log('s에 있는 숫자 중 가장 작은 수와 가장 큰 수는?',solution(s))