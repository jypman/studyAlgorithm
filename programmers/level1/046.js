// 덧칠하기

function solution(n, m, section) {
  let paintIndex = section[0] - 1;
  let result = 0;

  section.forEach((elem) => {
    if (paintIndex < elem) {
      paintIndex = elem + m - 1;
      result++;
    }
  });

  return result;
}

console.log(solution(8, 4, [2, 3, 6])); // 2
console.log(solution(5, 4, [1, 3])); // 1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4
