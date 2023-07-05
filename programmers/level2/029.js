// 멀리 뛰기
// js의 정수가 overflow 발생하므로 Bigint 사용하자!
function solution(n) {
  if (n === 1) return 1 % 1234567;
  if (n === 2) return 2 % 1234567;

  let n1 = 1n,
    n2 = 2n;
  for (let i = 0n; i < n - 2; i++) {
    const temp = n1;
    n1 = n2;
    n2 = temp + n2;
  }

  return n2 % 1234567n;
}

console.log(solution(3)); // 3
console.log(solution(4)); // 5
console.log(solution(5)); // 8
