// 핸드폰 번호 가리기 - 연습문제
const phone_number = '01091970296'

// function solution(phone_number) {
//     return phone_number.slice(0, phone_number.length - 4).replace(/[0-9]/g,'*') + phone_number.slice(phone_number.length - 4)
// }

// function solution(phone_number) {
//     return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
// }

function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}
console.log('핸드폰 뒷자리 4개를 제외한 나머지는 전부 * 처리 :',solution(phone_number))