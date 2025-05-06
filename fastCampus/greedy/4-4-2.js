/**
 * @see {@link https://www.acmicpc.net/problem/1931}
 * */

function solution(arr) {
  let result = 0;
  let next = 0;

  const sortedArr = arr.sort(([a, A], [b, B]) => {
    if (A !== B) return A - B;
    return a - b;
  });

  sortedArr.forEach(([start, end], index) => {
    if (index === 0 || next < start) {
      next = end;
      result++;
    }
  });

  return result;
}

console.log(
  solution([
    [1, 4],
    [3, 5],
    [0, 6],
    [5, 7],
    [3, 8],
    [5, 9],
    [6, 10],
    [8, 11],
    [8, 12],
    [2, 13],
    [12, 14],
  ])
); // 4
