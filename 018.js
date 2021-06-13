// 시저암호 - 연습문제
const s = 'zZ'
const n = 1
// 아스키코드 알고리즘을 이용
function solution(s, n) {
    let answer = []
    for (let i = 0; i < s.length; i++) {
        let charCode;
        // 공백일 경우 그대로 공백을 할당
        if (s.charCodeAt(i) === 32)
            charCode = 32
        // n을 더했을 때 소문자의 범위를 넘었을 경우 소문자 a로 루프하여 얻은 값을 반환
        else if (s.charCodeAt(i) <= 90 && 90 < s.charCodeAt(i) + n)
            charCode = s.charCodeAt(i) + n - 26
        // n을 더했을 때 대문자의 범위를 넘었을 경우 대문자 A로 루프하여 얻은 값을 반환
        else if (s.charCodeAt(i) <= 122 && 122 < s.charCodeAt(i) + n)
            charCode = s.charCodeAt(i) + n - 26
        // n을 더했을 때 소대문자 범위를 넘기지 않았을 경우 n을 더한 값을 반환
        else
            charCode = s.charCodeAt(i) + n
        answer.push(String.fromCharCode(charCode))
    }
    return answer.join('')
}

console.log('시저 암호의 결과는? ',solution(s, n))