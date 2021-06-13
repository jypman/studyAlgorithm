// 제일 작은 수 제거하기 - 연습문제
const arr = [5,6,2,1]

function solution(arr) {
    let ARR = arr
    ARR.splice(ARR.indexOf(Math.min.apply(null, arr)),1)
    return ARR.length === 0 ? [-1] : ARR
}

console.log('배열 중 가장 작은 수의 요소를 제거 후 반환하면?',solution(arr))