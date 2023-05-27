// 카펫

function solution(brown, yellow) {
  const total = brown + yellow;
  let cases = [];

  for (let i = 1; i <= total; i++) {
    if (total % i === 0 && cases.flat().indexOf(i) === -1) {
      cases.push([total / i, i]);
    }
  }

  return cases.find(([w, h]) => {
    return (w - 2) * (h - 2) === yellow;
  });
}

console.log(solution(10, 2)); // [4,3]
console.log(solution(8, 1)); // [3,3]
console.log(solution(24, 24)); // [8,6]
