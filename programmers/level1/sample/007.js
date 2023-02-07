// 3진법 뒤집기

function solution(n) {
  if (n < 1) return;
  if (100_000_000 < n) return;

  return parseInt(
    n.toString(3).split("").reverse().join().replace(/,/g, ""),
    3
  );
}
