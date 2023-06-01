// 큰 수 만들기

function solution(number, k) {
  const stack = [];
  let deletableCount = 0;

  for (const num of number) {
    while (deletableCount < k && stack[stack.length - 1] < num) {
      stack.pop();
      deletableCount++;
    }
    stack.push(num);
  }

  while (deletableCount < k) {
    stack.pop();
    deletableCount++;
  }

  return stack.join("");
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
