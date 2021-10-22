// 정수 제곱근 판별 - 연습문제
const n = 121

function solution(n) {
    for (let i = 1; i < n; i++) {
        if (i * i === n){
            return (i+1) * (i+1)
        }
        else if (i+1 === n) return -1
    }
    // 1은 1의 제곱근이며 (1+1)^2은 4를 반환한다.
    return 4
}

console.log('n이 양의 정수 x의 제곱근인가?(아니라면 -1 반환) :',solution(n))