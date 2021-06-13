// 이상한 문자 만들기 - 연습문제
const s = 'try hello world'

function solution(s) {
    let arr = s.split(' ')
    let answerArr = []
    for (let i = 0; i < arr.length; i++) {
        let str = ''
        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 !== 0) str += arr[i][j].toLowerCase()
            else str += arr[i][j].toUpperCase()
        }
        answerArr.push(str)
    }
    return answerArr.join(' ')
}

console.log('각 단어의 짝수번 인덱스에 해당하는 문자는 대문자로 바꾸면? ',solution(s))