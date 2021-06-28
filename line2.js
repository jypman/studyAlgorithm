// function main(lines) {
//     lines.forEach((v, i) => console.log(`lines[${i}]: ${v}`));
// }
//
// function runWithStdin() {
//     let input = "";
//     process.stdin.resume();
//     process.stdin.setEncoding("utf8");
//
//     process.stdin.on("data", v => {
//         input += v;
//     });
//     process.stdin.on("end", () => {
//         main(input.split("\n"));
//     });
// }
// runWithStdin();

function runWithStdin() {
    let input = '';
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    process.stdin.on("data", v => {
        input += v
    });
    process.stdin.on("end", v => {
        main(input);
    });
}

let schedule = []

function submit(dataArr) {
    const sub_id = dataArr[2]
    const sub_s = dataArr[3]
    const sub_p = dataArr[4].split(' ')
    if(sub_s !== sub_p.length - 1)
        return 'wrong format'
    schedule.push({id : sub_id, sub_p})
    dataArr.splice(1,4)
    return 'accepted'
}
function cancel(dataArr) {
    const can_id = dataArr[2]
    const can_date = dataArr[3]
    const result = schedule.find(elem => {
        return elem.id === can_id
    })
    if(result.sub_p === can_date)
        return 'deleted'
    else if(!result.sub_p)
        return 'no schedule'
    else
        return 'wrong format'
}
function check(dataArr) {
    const check_id = dataArr[2]
    const result = schedule.find(elem => {
        return elem.id === check_id
    })
    dataArr.splice(1,2)
    return result.sub_p
}
function calculate(dataArr) {
    const cal_id = dataArr[2]
    const result = schedule.find(elem => {
        return elem.id === cal_id
    })
    dataArr.splice(1,2)
    return result.totalTime > 40 ? (result.totalTime * 900) + 10000 : result.totalTime * 900
}
function main(lines) {
    let dataArr = lines.split('\n')
    let answer = ''
    while(dataArr[1]){
        switch (dataArr[1]) {
            case 'submit':
                answer += '\n'+ submit(dataArr)
                break
            case 'cancel':
                answer += '\n'+ cancel(dataArr)
                break
            case 'check':
                answer += '\n'+ check(dataArr)
                break
            case 'calculate':
                answer += '\n'+ calculate(dataArr)
                break
        }
    }
    return answer
}

runWithStdin()