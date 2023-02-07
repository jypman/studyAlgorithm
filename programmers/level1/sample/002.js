// 음양 더하기

function solution(absolutes, signs) {
  if (absolutes.length < 1 || 1000 < absolutes.length) return;
  if (absolutes.length !== signs.length) return;

  return absolutes.reduce((acc, cur, index) => {
    return acc + (signs[index] ? cur : cur * -1);
  }, 0);
}
