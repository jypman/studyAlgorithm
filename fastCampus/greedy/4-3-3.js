/**
 * @see https://www.acmicpc.net/problem/1789
 * */

function solution(total) {
  let TOTAL = total;
  let startInt = 1;
  let result = 0;

  while (0 < TOTAL) {
    TOTAL = TOTAL - startInt;

    if (0 <= TOTAL) {
      startInt++;
      result++;
    }
  }

  return result;
}

console.log(solution(200)); // 19
console.log(solution(6)); // 3
console.log(solution(5)); // 2
console.log(solution(4)); // 2
