// 뒤에 있는 큰 수 찾기

function solution(numbers) {
  const answer = Array.from({ length: numbers.length }, () => -1);
  const stack = [];

  numbers.forEach((number, index) => {
    while (stack.length && numbers[stack[stack.length - 1]] < number) {
      answer[stack.pop()] = number;
    }

    stack.push(index);
  });

  return answer;
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]

console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]
