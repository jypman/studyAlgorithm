// 최대공약수와 최소공배수 - 연습문제
// (n,m) => (1,15) (2,5) (2,4) (6,9) (12,16)
const n = 12
const m = 16

function solution(n, m) {
    let min = n < m ? n : m
    let max = n > m ? n : m
    if(max % min === 0) return [].concat(min, max / min * min)
    else{
        for (let i = min; i <= max; i--)
            if(max % i === 0 && min % i === 0) return [].concat(i, i * (max / i) * (min / i))
        return [].concat(1, min * max)
    }
}

console.log('두 인자의 최대공약수와 최소공배수는?',solution(n,m))