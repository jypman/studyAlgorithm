// 약수의 개수와 덧셈

function solution(left, right) {
  if (left < 1) return;
  if (right < left) return;
  if (1000 < right) return;

  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }

    if (count % 2 === 0) answer += i;
    if (count % 2 === 1) answer -= i;
  }
  return answer;
}
