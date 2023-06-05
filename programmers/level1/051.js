// 대충 만든 자판

function solution(keymap, targets) {
  const result = [];

  for (const target of targets) {
    let count = 0;

    for (const targetChar of target) {
      let min = Number.MAX_SAFE_INTEGER;

      for (const keys of keymap) {
        const match = keys.indexOf(targetChar);
        if (match > -1) min = Math.min(min, match + 1);
      }

      if (min === Number.MAX_SAFE_INTEGER) {
        count = -1;
        break;
      }
      count += min;
    }

    result.push(count);
  }

  return result;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]
console.log(solution(["ABCE"], ["ABDE"])); //  [-1]
