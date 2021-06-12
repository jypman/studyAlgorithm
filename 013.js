// 문자열 다루기 기본 - 연습문제
const s = '1e22'

function solution(s) {
    if(s.length === 4 || s.length === 6)
        return s.split('').every(elem => !isNaN(Number(elem)));
    else
        return false;
}

console.log('문자열의 각 문자를 모두 숫자로 바꿀 수 있는지? :',solution(s))