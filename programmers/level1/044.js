// 과일 장수

function solution(k, m, score) {
  let result = 0;
  let index = 0;
  let sortScore = score.filter((elem) => elem <= k).sort((a, b) => b - a);

  while (index + m <= sortScore.length) {
    const slice = sortScore.slice(index, index + m);
    result += slice[slice.length - 1] * m;
    index += m;
  }

  return result;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
