// 뒤에 있는 큰 수 찾기

function solution(numbers) {
  const answer = Array.from({ length: numbers.length }, () => -1);
  const numbersIndexes = [];

  numbers.forEach((number, index) => {
    while (
      numbersIndexes.length &&
      numbers[numbersIndexes[numbersIndexes.length - 1]] < number
    ) {
      answer[numbersIndexes.pop()] = number;
    }

    numbersIndexes.push(index);
  });

  return answer;
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]

console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]
