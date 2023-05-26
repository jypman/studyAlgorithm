// 가장 큰 수

function solution(numbers) {
  const strArray = numbers.map((el) => el.toString());

  const sortArray = strArray.sort(
    (a, b) => (b + a) * 1 - (a + b) * 1 // 문자열이된 값을 붙여서 -1을 곱해서 정수로 변환 후 어떤 값이 큰지 비교
  );

  return sortArray.join("")[0] === "0" ? "0" : sortArray.join("");
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
