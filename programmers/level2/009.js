// 피보나치 수 - 연습문제
const n = 5

function solution(n) {
    let fibonacciArr = []
    for (let i = 0; i <= n; i++) {
        i < 2
            ? fibonacciArr.push(i)
            : fibonacciArr
                .push( (fibonacciArr[fibonacciArr.length - 2] + fibonacciArr[fibonacciArr.length - 1])
                % 1234567)
    }
    return fibonacciArr[fibonacciArr.length - 1];
}

console.log('n번째 피보나치 수를 1234567로 나눈 나머지는?',solution(n))