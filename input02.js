// line 이벤트는 입력 값을 입력 후 줄바꿈을 할 경우 발생하는 이벤트이다.
// 줄바꿈을 할 경우 콜백함수는 입력자로부터 입력 받은 한 줄의 값을 인자로 받아 처리한다.
// 만약 입력이 완료된 후에 콜백함수가 실행되는 로직을 원한다면 close 이벤트를 추가해야 한다.
// line 이벤트를 통해서 줄바꿈을 통하여 입력 받은 값을 별도의 변수에 저장할 수 있다.
// 그리고 저장해둔 변수를 이용하여 계산한 후 입력 종료 시 로직의 결과값으로 출력할 수 있다.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    Input(input)
    rl.close()
})
.on('close', () => {
    console.log('end');
    process.exit()
});

function Input(input) {
    console.log(`received: ${input}`);
}