// H - index

function solution(citations) {
  const sortCitations = citations.sort((a, b) => b - a); // [6,5,3,1,0]
  let hIndex = 1000;

  for (let h = hIndex; h >= 0; h--) {
    if (h <= sortCitations.length) {
      const left = sortCitations.slice(0, h);
      const right = sortCitations.slice(h);

      if (left.every((elem) => elem >= h) && right.every((elem) => elem <= h)) {
        return (hIndex = h);
      }
    }
  }

  return hIndex;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([2, 0, 1, 4])); // 2
console.log(solution([6, 10, 4, 1, 2, 7, 8, 20, 6])); // 6
