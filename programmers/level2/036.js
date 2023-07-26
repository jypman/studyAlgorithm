// 2 x n 타일링

function solution(n) {
  if (n === 1) return 1;

  let n1 = 1n;
  let n2 = 2n;

  for (let i = 0n; i < n - 2; i++) {
    const temp = n1;
    n1 = n2;
    n2 = (temp + n2) % 1_000_000_007n;
  }
  return n2 % 1_000_000_007n;
}

console.log(solution(4)); // 5
