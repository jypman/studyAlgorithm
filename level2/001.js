// 124 나라의 숫자 - 연습문제(복습 필수)
const n = 12

// 3진법을 활용하여 규칙을 찾아내자!
function solution(n) {
    const country124 = ['4', '1', '2']
    let answer = '',
        input = n
    while (input) {
        answer = country124[input % 3] + answer
        input = input % 3 === 0 ? input/3 - 1 : Math.floor(input / 3)
    }
    return answer;
}

console.log('n은 124나라에서 어떻게 표현하는가?',solution(n))