// 없는 숫자 더하기

function solution(numbers) {
  if (numbers.length < 1 || 9 < numbers.length) return;

  const numbersSum = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  let intSum = 0;
  for (let i = 1; i <= 9; i++) {
    intSum += i;
  }

  return intSum - numbersSum;
}
