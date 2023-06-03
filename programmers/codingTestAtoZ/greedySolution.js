function solution(number, k) {
  let deletableCount = k;
  const stack = [];

  for (const num of number) {
    while (deletableCount > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      deletableCount--;
    }
    stack.push(num);
  }

  while (deletableCount > 0) {
    stack.pop();
    deletableCount--;
  }

  return stack.join("");
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
console.log(solution("9876543", 2));
