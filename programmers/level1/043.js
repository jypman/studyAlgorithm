// 명예의 전당(1)

function solution(k, score) {
  const result = [];

  score.forEach((p, idx) => {
    let sortArray = score.slice(0, idx + 1).sort((a, b) => b - a);

    if (k > idx) {
      result.push(sortArray[sortArray.length - 1]);
    } else {
      result.push(sortArray[k - 1]);
    }
  });

  return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
