// 둘만의 암호

function solution(s, skip, index) {
  const alphabet = Array.from(
    {
      length: "z".charCodeAt(0) - "a".charCodeAt(0) + 1,
    },
    (_, index) => String.fromCharCode(index + "a".charCodeAt(0))
  );

  // 알파벳을 요소로 갖고 있는 배열에서 스킵해야 할 알파벳 요소를 제거
  const excludeAlphabet = alphabet.filter((v) => skip.indexOf(v) === -1);

  return [...s].reduce((acc, char) => {
    return (
      acc +
      excludeAlphabet[
        (excludeAlphabet.indexOf(char) + index) % excludeAlphabet.length
      ]
    );
  }, "");
}

console.log(solution("aukks", "wbqd", 5)); // "happy"
console.log(solution("zzzzzz", "abcdefghijklmnopqrstuvwxy", 6)); // "zzzzzz"
