// 직사각형 별 찍기 - 연습문제

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const arr = data.split(" ")
    for (let i = 0; i < arr[1]; i++) console.log('*'.repeat(arr[0]))
});