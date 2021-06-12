// 나누어 떨어지는 숫자 배열 - 연습문제

const arr = [7, 15, 5, 25, 21, 42, 3]
const divisor = 7

function solution(arr, divisor) {
    let answer = [];
    for (let elem of arr) {
        if(elem % divisor === 0) answer.push(elem)
    }
    if(answer.length === 0) return [-1]
    else return answer.sort((a, b) => a - b);
}

console.log('나누어 떨어지는 원소만 추출한 배열(나누어 떨어지지 않을 경우 -1 추가) :',solution(arr, divisor))