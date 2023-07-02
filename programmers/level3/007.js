// 단속카메라

function solution(routes) {
  const sortRoutes = [...routes].sort((a, b) => a[1] - b[1]);
  let answer = 0;
  let standard = sortRoutes.shift()[1];

  answer++;

  sortRoutes.forEach(([entrance, exit]) => {
    if (entrance <= standard) {
      standard = Math.min(exit, standard);
    } else {
      standard = exit;
      answer++;
    }
  });

  return answer;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
); // 2
