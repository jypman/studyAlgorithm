// JadenCase 문자열 만들기 - 연습문제
const s = " adgagd   3eagdag "

function solution(s) {
    let consecutiveBlanks = s.toLowerCase().split(' '),
        result = []
    for (let elem of consecutiveBlanks) {
        if(isNaN(parseInt(elem[0])))
            result.push(elem.replace(/[a-z]/, c => c.toUpperCase()))
        else result.push(elem)
    }
    return result.join(' ')
}

console.log('JadenCase 문자열:',solution(s))