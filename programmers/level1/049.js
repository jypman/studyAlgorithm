// 옹알이

function solution(babbling) {
  const wrongRegexp = /(aya|ye|woo|ma)\1+/;
  const correctRegexp = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) =>
      !wrongRegexp.test(word) && correctRegexp.test(word) ? ++ans : ans,
    0
  );
}

console.log(solution(["aya", "yee", "u", "maa"])); // 1

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2

console.log(solution(["mama", "yeye", "woowoo", "ayaaya"])); // 0

console.log(solution(["yayae"])); // 0

console.log(solution(["ayayeayayeaya"])); // 1
