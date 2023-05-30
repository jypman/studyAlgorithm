// 단어 변환

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let result = 0;

  dfs(begin, words);
  function dfs(cur, wordArray) {
    const newWord = isConvertibleWord(cur, target)
      ? target
      : wordArray.find((word) => isConvertibleWord(cur, word));

    result++;

    if (newWord !== target) {
      const restWords = wordArray.filter((word) => word !== newWord);
      dfs(newWord, restWords);
    }
  }

  function isConvertibleWord(cur, targetToCompare) {
    return (
      [...targetToCompare].reduce(
        (acc, item, index) => (item === cur[index] ? acc + 1 : acc),
        0
      ) >=
      cur.length - 1
    );
  }

  return result;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0
