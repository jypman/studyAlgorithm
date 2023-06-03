// 숫자 짝꿍

function solution(X, Y) {
  const objX = [...X].reduce((acc, num) => {
    if (acc[num] === undefined) {
      acc[num] = 1;
    } else {
      acc[num]++;
    }
    return acc;
  }, {});

  const objY = [...Y].reduce((acc, num) => {
    if (acc[num] === undefined) {
      acc[num] = 1;
    } else {
      acc[num]++;
    }
    return acc;
  }, {});

  const concatObj = Object.entries(objX).reduce((acc, [num, count]) => {
    if (objY[num] !== undefined) {
      acc[num] = Math.min(count, objY[num]);
    }
    return acc;
  }, {});

  const concatStr = Object.entries(concatObj).reduce((acc, [num, count]) => {
    return acc + num.repeat(count);
  }, "");

  const result = [...concatStr].sort((a, b) => b - a).join("");

  if (result[0] === "0") return "0";
  return concatStr.length === 0 ? "-1" : result;
}

console.log(solution("100", "2345")); // -1
console.log(solution("100", "203045")); // 0
console.log(solution("100", "123450")); // 10
console.log(solution("12321", "42531")); // 321
console.log(solution("5525", "1255")); // 552
