// N개의 최소공배수 - 연습문제(복습 필수) -> 유클리드 호제법 알고리즘 활용
// 최소공배수는 두 수의 곱에서 최대공약수를 나눈 값과 같다.
const arr = [6, 9, 15, 21]

function greatestCommonFactor(a, b) {
    let bigInt = a > b ? a : b,
        smallInt = a > b ? b : a
    while (smallInt) {
        let temp = smallInt;
        smallInt = bigInt % smallInt;
        bigInt = temp;
    }
    return bigInt;
}
function leastCommonMultiple(a,b) {
    return a * b / greatestCommonFactor(a, b)
}
function solution(arr) {
    let answer = 1
    for (let i = 0; i < arr.length; i++)
        answer = leastCommonMultiple(answer, arr[i])
    return answer;
}

console.log('N개의 요소를 갖는 배열 arr 요소들의 최소공배수는?',solution(arr))
