// 하샤드 수 - 연습문제
const x = 13

function solution(x) {
    return x % String(x).split('')
        .reduce((result, elem) => result + parseInt(elem), 0) === 0;
}

console.log('x는 하샤드 수인가?',solution(x))