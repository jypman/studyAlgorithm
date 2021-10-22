// 행렬의 덧셈 - 연습문제
const arr1 = [[1,2],[2,3]]
const arr2 = [[3,4],[4,6]]

function solution(arr1, arr2) {
    let ARR = []
    for (let i = 0; i < arr1.length; i++) {
        let arr = []
        for (let j = 0; j < arr1[i].length; j++) {
            arr.push(arr1[i][j] + arr2[i][j])
            if(j+1 === arr1[i].length) ARR.push(arr)
        }
    }
    return ARR;
}

console.log('행렬의 각 요소끼리의 합을 요소로 갖는 배열 : ',solution(arr1, arr2))