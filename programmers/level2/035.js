// 숫자 변환하기

function solution(x, y, n) {
  let answer = -1;
  const stack = [{ number: y, tried: 0 }];

  while (stack.length) {
    const { number, tried } = stack.shift();

    if (number === x) {
      answer = tried;
      break;
    }

    if (number % 2 === 0) {
      stack.push({ number: number / 2, tried: tried + 1 });
    }
    if (number % 3 === 0) {
      stack.push({ number: number / 3, tried: tried + 1 });
    }
    if (number - n >= x) {
      stack.push({ number: number - n, tried: tried + 1 });
    }
  }

  return answer;
}

console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // -1
console.log(solution(38, 40, 2)); // 1
console.log(solution(8, 144, 32)); // 3
