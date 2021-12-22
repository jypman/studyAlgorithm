// 문자열 내림차순으로 배치하기 - 연습문제
const s = 'abscDswqN'

function solution(s) {
    return s.split('').sort().reverse().toString().replace(/,/g,'');
}

console.log(solution(s))