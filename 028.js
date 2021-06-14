// 콜라츠 추측 - 연습문제
const num = 626331

function solution(num) {
    let count = 0, input = num
    while (input !== 1 && count !== 500){
        input % 2 === 0 ? input /= 2 : input = (input * 3) + 1
        count++
        if(input === 1) return count
    }
    return num === 1 ? 0 : -1;
}

console.log('해당 작업을 몇 번 해야 1이 되는가?',solution(num))