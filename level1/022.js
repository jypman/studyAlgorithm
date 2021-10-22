// 자연수 뒤집어 배열로 만들기 - 연습문제
const n = 12345

function solution(n) {
    return String(n).split('').reverse().map(elem => Number(elem))
}

console.log('자연수를 각 자리수를 요소로 갖는 거꾸로 된 배열로 만들면?', solution(n))