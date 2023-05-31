// 모음사전

function solution(word) {
  const availableWords = "AEIOU";
  const pickMaxCount = 5;
  let wordArray = [];

  function recursion(count, words) {
    if (count === 0) {
      wordArray.push(words);
      return;
    }
    for (let i = 0; i <= pickMaxCount; i++) {
      recursion(count - 1, `${words}${["", ...availableWords][i]}`);
    }
  }

  recursion(pickMaxCount, "");

  return [...new Set(wordArray)].sort().indexOf(word);
}

console.log(solution("AAAAE")); // 6
console.log(solution("AAAE")); // 10
console.log(solution("I")); // 1563
console.log(solution("EIO")); // 1189
