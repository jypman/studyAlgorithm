// 연속 부분 수열 합의 개수

function solution(elements) {
  const answer = [];
  const extendElements = [...elements, ...elements];

  elements.forEach((_, idx) => {
    for (let i = 0; i < elements.length; i++) {
      const slice = extendElements.slice(i, i + idx + 1);
      const sum = slice.reduce((acc, cur) => acc + cur, 0);
      answer.push(sum);
    }
  });

  return [...new Set(answer)].length;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
