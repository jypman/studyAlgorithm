function trie(wordArray) {
  const root = {};

  for (const words of wordArray) {
    let current = root;
    for (const word of words) {
      if (!current[word]) {
        current[word] = [0, {}];
      }
      current[word][0] += 1;
      current = current[word][1];
    }
  }

  return root;
}

function solution(wordArray) {
  let answer = 0;
  const myTrie = trie(wordArray);

  for (const words of wordArray) {
    let count = 0;
    let current = myTrie;

    for (const word of words) {
      count += 1;
      if (current[word][0] === 1) {
        break;
      }
      current = current[word][1];
    }
    answer += count;
  }

  return answer;
}

console.log("test 성공 :", solution(["go", "gone", "guild"]) === 7); // 2 3 2
console.log("test 성공 :", solution(["abc", "def", "ghi", "jklm"]) === 4); // 1 1 1 1
console.log(
  "test 성공 :",
  solution(["word", "war", "warrior", "world"]) === 15
); // 4 3 4 4
