// 행렬의 곱셈 - 연습문제
const arr1 = [ [1, 2, 3], [4, 5, 6] ],
    arr2 = [ [1, 4], [2, 5], [3, 6] ]

function solution(arr1, arr2) {
    let ARR1 = arr1[0].length === arr2.length ? arr1.slice() : arr2.slice()
    let ARR2 = arr1[0].length === arr2.length ? arr2.slice() : arr1.slice()
    let matrix = []
    for (let i = 0; i < ARR1.length; i++) {
        let line = []
        for (let j = 0; j < ARR2[0].length; j++) {
            let row = 0
            for (let k = 0; k < ARR2.length; k++) {
                row += ( ARR1[i][k] * ARR2[k][j] )
            }
            line.push(row)
        }
        matrix.push(line)
    }
    return matrix;
}

console.log('행렬의 곱셈의 결과 :',solution(arr1, arr2))