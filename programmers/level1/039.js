// 콜라 문제

function solution(a, b, n) {
  let result = 0;
  let myBottle = n;

  while (myBottle >= a) {
    const submitBottle = Math.floor(myBottle / a) * a;
    const receipt = (submitBottle / a) * b;

    myBottle = myBottle - submitBottle + receipt;
    result += receipt;
  }

  return result;
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9
