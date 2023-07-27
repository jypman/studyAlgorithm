// 연속된 부분 수열의 합

function solution(sequence, k) {
  let [p1, p2] = [0, 0];
  let indexes = [];
  let sum = sequence[0];

  while (p1 <= sequence.length - 1) {
    if (sum === k) {
      if (indexes.length === 0) indexes.push([p1, p2]);
      else {
        const [popStart, popEnd] = indexes.at(-1);
        if (p2 - p1 < popEnd - popStart) {
          indexes = [[p1, p2]];
        }
      }

      sum -= sequence[p1++];
      sum += sequence[++p2];
    } else if (sum < k) {
      if (sequence.length - 1 <= p2) {
        sum -= sequence[p1++];
      }
      if (p2 <= sequence.length - 1) {
        sum += sequence[++p2];
      }
    } else {
      sum -= sequence[p1++];
    }
  }

  return indexes[0];
}

console.log(solution([1, 2, 3, 4, 5], 7)); // [2,3]
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5)); // [6,6]
console.log(solution([2, 2, 2, 2, 2], 6)); // [0,2]
console.log(solution([1, 1, 1, 1, 1, 1, 3], 3)); // [6,6]
console.log(
  solution(
    Array.from({ length: 1_000_000 }, () => 1),
    1_000_000
  )
); // [0,999999]
