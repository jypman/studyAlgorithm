// 같은 숫자는 싫어 - 연습문제
const arr = [1, 1, 3, 3, 6, 8, 8, 9, 1, 1]

function solution(arr) {
    let noReduplication = [];
    for (let i = 0; i < arr.length; i++) {
        if(i === 0 || arr[i - 1] !== arr[i])
            noReduplication.push(arr[i])
    }
    return noReduplication;
}

console.log('중복된 원소를 제거한 후의 배열 :',solution(arr))
