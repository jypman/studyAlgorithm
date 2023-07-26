// 택배상자

function solution(order) {
  let answer = 0;
  let queue = [...order];
  let queueIndex = 0;
  const packages = Array.from(
    { length: order.length },
    (_, index) => index + 1
  );
  const stack = [];

  packages.forEach((item) => {
    while (stack[stack.length - 1] === queue[queueIndex]) {
      answer++;
      queueIndex++;
      stack.pop();
    }

    if (item === queue[queueIndex]) {
      answer++;
      queueIndex++;
    } else {
      stack.push(item);
    }
  });

  while (queue.length && stack.length) {
    if (stack.pop() === queue[queueIndex++]) {
      answer++;
    } else {
      break;
    }
  }

  return answer;
}

console.log(solution([4, 3, 1, 2, 5])); // 2
console.log(solution([5, 4, 3, 2, 1])); // 5
console.log(solution([1, 2, 3, 4, 5])); // 5
console.log(solution([1, 2, 4, 3, 5])); // 5
