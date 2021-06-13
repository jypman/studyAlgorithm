// 완주하지 못한 선수 - 해시
const participant = ['a', 'a', 'b', 'b', 'c']
const completion = ['a', 'b', 'b', 'c']

function solution(participant, completion) {
    let objP = {}
    for (let elem of participant) {
        objP[elem] = objP[elem] ? objP[elem] + 1 : 1
    }
    console.log('참가자 중 동명이인 수 :',objP)
    for (let elem of completion) {
        objP[elem] -= 1
    }
    for (let key in objP) {
        if (objP[key] === 1) {
            return key
        }
    }
}

console.log('완주하지 못한 선수의 이름은? :', solution(participant, completion))