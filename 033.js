// x만큼 간격이 있는 n개의 숫자 - 연습문제
const x = 2
const n = 5

function solution(x, n) {
    let arr = [], num = x
    for (let i = 0; i < n; i++){ arr.push(num);num += x; }
    return arr;
}

console.log(solution(x,n))