// 피보나치 수열

// 재귀함수 이용
function fibonacci(num) {
  if (num === 1 || num === 2) return 1;
  return fibonacci(num - 2) + fibonacci(num - 1);
}

console.log("num 인자 값을 피보나치 수로 바꾸면?(재귀함수 이용)", fibonacci(4));

// 단순 반복문 이용
function FIBONACCI(num) {
  let n1 = 1,
    n2 = 1;
  for (let i = 0; i < num - 2; i++) {
    const temp = n1;
    n1 = n2;
    n2 = temp + n2;
  }
  return n2;
}

console.log("num 인자 값을 피보나치 수로 바꾸면?(단순 반복문)", FIBONACCI(4));
