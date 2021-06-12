// 소수 찾기 - 연습문제
const n = 15;

// 에라토스테네스의 체 알고리즘 적용
function solution(n) {
    let primeNumberList = [];
    let primeNumberCount = 0;
    for (let i = 0; i <= n; i++) {
        primeNumberList.push(i)
    }
    for (let i = 2; i <= n; i++) {
        if (primeNumberList[i] === null) continue
        for (let j = 2 * i; j <= n; j += i) {
            primeNumberList[j] = null
        }
    }
    for (let i = 2; i <= n; i++) {
        if(primeNumberList[i] !== null) ++primeNumberCount
    }
    console.log('에라토스테네스의 체에 거르기 전 배열 :',primeNumberList)
    return primeNumberCount;
}

console.log('소수의 갯수는? : ',solution(n))