/**
 * @see https://www.acmicpc.net/problem/2839
 * */

const solution = (total) => {
  const five = 5;
  const three = 3;

  if (total < three) return -1;

  let share1 = Math.floor(total / five);
  let rest1 = total % five;

  if (rest1 === 0) return share1;
  if (rest1 < three) {
    share1 = 0;
    rest1 = total;
  }

  const share2 = Math.floor(rest1 / three);
  const rest2 = rest1 % three;

  if (rest2 === 0) return share1 + share2;

  return -1;
};

console.log(solution(2)); // -1
console.log(solution(3)); // 1
console.log(solution(18)); // 4
console.log(solution(15)); // 3
console.log(solution(25)); // 5
console.log(solution(4)); // -1
console.log(solution(5)); // 1
console.log(solution(6)); // 2
console.log(solution(7)); // -1
