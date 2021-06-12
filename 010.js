// 문자열 내 마음대로 정렬하기 - 연습문제

const strings = ["abce", "abcd", "cdx"]
const n = 1

function solution(strings, n) {
    return strings.sort((a,b) => {
        if(a[n] > b[n]) return 1;
        else if(a[n] < b[n]) return -1;
        else if(a[n] === b[n]) {
            let i = 0;
            while (a[i] === b[i]) i++;
            if(a[i] > b[i]) return 1;
            else if(a[i] < b[i]) return -1;
        }
    })
}

console.log('각 원소의 n번째 문자를 기준으로 오름차순 정렬한 배열 :',solution(strings, n));