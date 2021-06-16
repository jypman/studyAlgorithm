// 최솟값 만들기 - 연습문제
const A = [10,4,3]
const B = [2,9,7]

function solution(A, B){
    const a = A.sort( (a,b) => b - a)
    const b = B.sort( (a,b) => a - b)
    let sum = 0
    for (let i = 0; i < A.length; i++) {
        sum = sum + ( a[i] * b[i] )
    }
    return sum
}

console.log('두개의 각 배열의 요소를 서로 곱한 후 누적으로 합한 촤솟값은?',solution(A, B))