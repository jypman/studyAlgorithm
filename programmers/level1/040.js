// 가장 가까운 같은 숫자

function solution(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    const sliceStr = s.slice(0, i);
    const distance =
      sliceStr.lastIndexOf(s[i]) !== -1
        ? i - sliceStr.lastIndexOf(s[i])
        : sliceStr.lastIndexOf(s[i]);
    result.push(distance);
  }

  return result;
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
