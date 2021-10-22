// 평균 구하기 - 연습문제
const arr = [1,2,3]

function solution(arr) {
    return arr.reduce((result, elem) => result + elem, 0) / arr.length
}

console.log('각 요소의 값을 더한 평균 값은?',solution(arr))