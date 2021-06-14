// 모의고사 - 완전탐색(복습 필수)
let answers = [1,2,3,4,5]

function solution(answers) {
    const student1 = [1,2,3,4,5]
    const student2 = [2,1,2,3,2,4,2,5]
    const student3 = [3,3,1,1,2,2,4,4,5,5]
    let answer = [],
        student1CorrectAnswer = [],
        student2CorrectAnswer = [],
        student3CorrectAnswer = []
    for (let i = 0; i < answers.length; i++) {
        if(answers[i] === student1[i % 5]){
            student1CorrectAnswer.push(answers[i])
        }
        if(answers[i] === student2[i % 8]){
            student2CorrectAnswer.push(answers[i])
        }
        if(answers[i] === student3[i % 10]){
            student3CorrectAnswer.push(answers[i])
        }
    }
    const max = Math
        .max(student1CorrectAnswer.length, student2CorrectAnswer.length, student3CorrectAnswer.length)
    if(max === student1CorrectAnswer.length) answer.push(1)
    if(max === student2CorrectAnswer.length) answer.push(2)
    if(max === student3CorrectAnswer.length) answer.push(3)
    return answer;
}

console.log('모의고사를 찍어서 제일 많이 맞힌 학생은?',solution(answers))