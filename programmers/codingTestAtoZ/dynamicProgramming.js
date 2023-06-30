function solution(strs, t) {
  const dp = Array.from({ length: t.length + 1 }, () => 0);
  const setStrs = new Set(strs);
  const maxLengthStr = 5;

  for (let i = 1; i < t.length + 1; i++) {
    dp[i] = Infinity;
    for (let j = 1; j < Math.min(i + 1, maxLengthStr + 1); j++) {
      const start = i - j;
      const end = i;
      if (setStrs.has(t.slice(start, end))) {
        dp[i] = Math.min(dp[i], dp[i - j] + 1);
      }
    }
  }

  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}

console.log(solution(["ba", "na", "n", "a"], "banana")); // 3
console.log(solution(["app", "ap", "p", "l", "e", "ple", "pp"], "apple")); // 2
console.log(solution(["ba", "an", "nan", "ban", "n"], "banana")); // -1
