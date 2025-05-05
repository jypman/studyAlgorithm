function solution(a, b) {
  let count = 1;
  let targetB = b;
  let flag = false;

  while (a <= targetB) {
    if (a === targetB) {
      flag = true;
      break;
    }

    if (targetB % 2 === 0) {
      targetB = parseInt(targetB / 2);
    } else if (targetB % 10 === 1) {
      targetB = parseInt(targetB / 10);
    } else {
      break;
    }

    count++;
  }

  if (flag) {
    return count;
  } else {
    return -1;
  }
}

console.log(solution(2, 162));
console.log(solution(4, 42));
console.log(solution(100, 40021));
