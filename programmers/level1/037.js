// 크기가 작은 부분문자열
function solution(t, p) {
  const length = p.length;
  let src = 0;
  const array = [];

  while (src + length <= t.length) {
    array.push(t.slice(src, src + length));
    src++;
  }

  return array.filter((elem) => elem <= p).length;
}

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));
