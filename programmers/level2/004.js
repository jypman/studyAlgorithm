// 다음 큰 숫자 - 연습문제
const n = 15

// function solution(n) {
//     let count = 0,
//         COUNT = 0,
//         N = n
//     const n2 = n.toString(2)
//     for (let i = 0; i < n2.length; i++) {
//         if(n2[i] === '1') count++
//     }
//     while (count !== COUNT) {
//         COUNT = 0
//         const N2 = (N+1).toString(2)
//         for (let i = 0; i < N2.length; i++) {
//             if(N2[i] === '1') COUNT++
//         }
//         N++
//     }
//     return N
// }

function solution(n) {
    let N = n
    const sizeN = N.toString(2).match(/1/g).length
    while(N++) {
        if(sizeN === N.toString(2).match(/1/g).length) return N
    }
}

console.log('n의 다음 큰 숫자는?',solution(n))