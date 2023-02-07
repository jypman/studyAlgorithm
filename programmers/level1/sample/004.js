// 내적

function solution(a, b) {
  if (a.length < 1 || 1000 < a.length) return;
  if (b.length < 1 || 1000 < b.length) return;
  if (a.length !== b.length) return;

  return a.reduce((acc, cur, index) => {
    return acc + cur * b[index];
  }, 0);
}
