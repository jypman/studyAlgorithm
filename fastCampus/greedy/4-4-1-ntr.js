// 문제 : https://www.acmicpc.net/problem/13305

function solution(arr1, arr2) {
  let minVal = 0;

  const nonDecreasingArr = arr2.map((cost, index) => {
    if (index === 0 || cost < minVal) minVal = cost;
    return minVal;
  });

  return nonDecreasingArr.reduce((acc, cur, index) => {
    if (arr1[index] === undefined) return acc;
    return acc + cur * arr1[index];
  }, 0);
}

console.log(solution([2, 3, 1], [5, 2, 4, 1])); // 18
console.log(solution([3, 3, 4], [1, 1, 1, 1])); // 10
console.log(solution([2, 3, 1, 2], [5, 2, 4, 7, 8])); // 22
