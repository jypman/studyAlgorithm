// 땅따먹기
// dp 문제

function solution(land) {
  let dp = Array.from({ length: land.length }, () => [0, 0, 0, 0]);

  dp[land.length - 1][0] = land[land.length - 1][0];
  dp[land.length - 1][1] = land[land.length - 1][1];
  dp[land.length - 1][2] = land[land.length - 1][2];
  dp[land.length - 1][3] = land[land.length - 1][3];

  for (let i = land.length - 2; i >= 0; i--) {
    dp[i][0] = land[i][0] + Math.max(dp[i + 1][1], dp[i + 1][2], dp[i + 1][3]);
    dp[i][1] = land[i][1] + Math.max(dp[i + 1][0], dp[i + 1][2], dp[i + 1][3]);
    dp[i][2] = land[i][2] + Math.max(dp[i + 1][0], dp[i + 1][1], dp[i + 1][3]);
    dp[i][3] = land[i][3] + Math.max(dp[i + 1][0], dp[i + 1][1], dp[i + 1][2]);
  }

  return Math.max(dp[0][0], dp[0][1], dp[0][2], dp[0][3]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 5 + 7 + 4 =  16

console.log(
  solution([
    [0, 1, 1, 10],
    [0, 1, 1, 100],
  ])
); // 1 + 100 = 101

console.log(
  solution([
    [1, 1, 3, 1],
    [2, 3, 2, 2],
    [1, 4, 1, 1],
  ])
); // 3 + 2 + 4 = 9
