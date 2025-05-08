/**
 * @see {@link https://www.acmicpc.net/problem/11509}
 * */

function solution(arr) {
  let result = 0;
  let ARR = [...arr];

  while (ARR.length > 0) {
    let h = Math.max(...ARR);

    ARR = ARR.filter((item) => {
      if (item === h) {
        h--;
        return false;
      }

      return true;
    });

    result++;
  }

  return result;
}

console.log(solution([2, 1, 5, 4, 3])); // 2
console.log(solution([1, 2, 3, 4, 5])); // 5
console.log(solution([4, 5, 2, 1, 4])); // 3
