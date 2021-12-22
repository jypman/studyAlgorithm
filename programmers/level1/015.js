// 소수 찾기 - 연습문제 (복습 필수)
const n = 15;

// 에라토스테네스의 체 알고리즘 적용
function solution(n) {
    let primeNumberList = [];
    for (let i = 0; i <= n; i++) {
        primeNumberList.push(i)
    }
    for (let i = 2; i <= n; i++) {
        if (primeNumberList[i] === null) continue
        for (let j = 2 * i; j <= n; j += i) {
            primeNumberList[j] = null
        }
    }
    console.log('에라토스테네스의 체에 거르기 전 배열 :',primeNumberList)
    primeNumberList = [...new Set(primeNumberList)]
    return primeNumberList.indexOf(null) > -1
        ? primeNumberList.length - 3
        : primeNumberList.length - 2
}

console.log('소수의 갯수는? : ',solution(n))