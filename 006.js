// 가운데 글자 가져오기 - 연습문제
const s = 'solution'

function solution(s) {
    switch (s.length % 2) {
        case 0:
            return s.slice((s.length / 2) - 1, (s.length / 2) + 1);
        case 1:
            return s.slice(s.length / 2, (s.length / 2) + 1);
        default:
            return;
    }
}

console.log('매개변수의 가운데 문자열 혹은 문자의 값은? :', solution(s))