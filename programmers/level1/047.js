// 기사단원의 무기

function solution(number, limit, power) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; Math.sqrt(i) >= j; j++) {
      if (i % j === 0) count += 2;
      if (i / j === j) count--;
      if (count > limit) {
        count = power;
        break;
      }
    }
    sum += count;
  }

  return sum;
}

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21
