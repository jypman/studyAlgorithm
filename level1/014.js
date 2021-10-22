// 서울에서 김서방 찾기 - 연습문제
const seoul = ['Lee','Park','Kim','Yu','Jo']

function solution(seoul) {
    return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

console.log(solution(seoul))