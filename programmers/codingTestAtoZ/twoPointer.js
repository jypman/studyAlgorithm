function solution(gems) {
  let answer = [0, gems.length];
  let p1 = 0;
  let p2 = 0;
  const gemsSize = new Set(gems).size;
  const collectGems = new Map();
  collectGems.set(gems[p1], 1);

  while (p1 < gems.length && p2 < gems.length) {
    if (collectGems.size === gemsSize) {
      if (p2 - p1 < answer[1] - answer[0]) {
        answer = [p1 + 1, p2 + 1];
      }

      collectGems.set(gems[p1], collectGems.get(gems[p1]) - 1);

      if (collectGems.get(gems[p1]) === 0) {
        collectGems.delete(gems[p1]);
      }

      p1++;
    } else {
      p2++;
      collectGems.set(gems[p2], (collectGems.get(gems[p2]) || 0) + 1);
    }
  }

  return answer;
}

console.log(
  solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
); // [3,7]

console.log(solution(["AA", "AB", "AC", "AA", "AC"])); // [1,3]

console.log(solution(["XYZ", "XYZ", "XYZ"])); // [1,1]

console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"])); // [1,5]
