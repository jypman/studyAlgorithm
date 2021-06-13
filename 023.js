// 정수 내림차순으로 정렬하기
const n = 118372

function solution(n) {
    return parseInt( String(n).split('').sort((a,b) => b-a).join('') )
}

console.log('정수를 내림차순으로 정렬하면?',solution(n))