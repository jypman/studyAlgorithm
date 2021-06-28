// function main(argv) {
//     argv.forEach((v, i) => console.log(`argv[${i}]: ${v}`));
// }

// main(process.argv.slice(2));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    console.log(main(input))
    rl.close()
})
    .on('close', () => {
        process.exit()
    });

function exponential(number) {
    let num = number
    let answer = 1
    for (let i = 0; i < num; i++) answer *= 2
    return answer
}

function factorial(number) {
    let num = number
    let answer = 1
    for (let i = num; i >= 1; i--) answer *= i
    return answer
}

function main(argv) {
    const number1 = parseInt(argv.split(' ')[0])
    const number2 = parseInt(argv.split(' ')[1])
    if(exponential(number1) > factorial(number2))
        return 'Exponential'
    else
        return 'Factorial'
}