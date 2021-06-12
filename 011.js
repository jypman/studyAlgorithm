// 문자열 내 p와 y의 갯수 - 연습문제
const s = 'PpwpPPwyy'

// function solution(s){
//     let p = 0,
//         y = 0;
//     for (let i = 0; i < s.length; i++) {
//         p = s.toLowerCase()[i] === 'p' ? ++p : p
//         y = s.toLowerCase()[i] === 'y' ? ++y : y
//     }
//     return p === y;
// }

function solution(s) {
    const small_s = s.toLowerCase();
    return small_s.split("p").length === small_s.split("y").length;
}

console.log(' 문자열 내 p와 y의 갯수가 같으면 : true \n그렇지 않으면 false \n결과:',solution(s))
