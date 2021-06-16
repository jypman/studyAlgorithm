// 올바른 괄호 - 연습문제 -> 스택(후입선출)을 활용하자!
const s = "(())()"

function solution(s){
    let stack = []
    for (let i = 0; i < s.length; i++) {
        stack[stack.length - 1] === '(' && s[i] === ')'
            ? stack.pop()
            : stack.push(s[i])
    }
    return stack.length === 0;
}

console.log('문자열 s는 올바른 괄호인가?',solution(s))
