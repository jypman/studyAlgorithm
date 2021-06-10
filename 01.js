// 체육복 - greedy
const n = 7;
const lost = [2,3,4];
const reserve = [1,2,3,6];

function solution(n, lost, reserve) {
    const total = n;
    let nonAttendance = lost.filter(elm => !reserve.includes(elm))
    let reserveWithoutBeingStolen = reserve.filter(elm => !lost.includes(elm))
    for (let i = 0; i < reserveWithoutBeingStolen.length; i++) {
        for (let j = 0; j < nonAttendance.length; j++) {
            if(reserveWithoutBeingStolen[i] - 1 === nonAttendance[j] || reserveWithoutBeingStolen[i] + 1 === nonAttendance[j]){
                nonAttendance.splice(j,1)
                break;
            }
        }
    }
    return total - nonAttendance.length;
}

console.log(solution(n, lost, reserve))