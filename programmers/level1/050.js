// 문자열 나누기

function solution(s) {
  const obj = {
    x: [],
    others: 0,
  };
  let result = 0;

  [...s].forEach((char) => {
    if (obj.x.length === 0) {
      obj.x = [char, 1];
    } else if (obj.x[0] === char) {
      obj.x[1] += 1;
    } else {
      obj.others += 1;
    }

    if (obj.x.length && obj.x[1] === obj.others) {
      result++;
      obj.x = [];
      obj.others = 0;
    }
  });

  // 두 횟수가 다른 상태에서 더이상 읽을 글자가 없으면 지금까지 읽은 문자를 분리해야 함으로 분리 횟수 1을 증가해준다.
  return result + (obj.x.length > 0 ? 1 : 0);
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
