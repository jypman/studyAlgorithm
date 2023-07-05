// 귤 고르기

function solution(k, tangerine) {
  const obj = tangerine.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  let answer = 0;

  Object.values(obj)
    .sort((a, b) => b - a)
    .reduce((acc, count) => {
      if (k <= acc) {
        return acc;
      }
      acc += count;
      answer++;
      return acc;
    }, 0);

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
