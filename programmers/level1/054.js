// 바탕화면 정리

function solution(wallpaper) {
  let lu = [null, null];
  let rd = [null, null];

  wallpaper.forEach((item, i) => {
    const firstFilePosition = item.indexOf("#");
    const lastFilePosition = item.lastIndexOf("#");

    if (firstFilePosition > -1) {
      if (lu[0] === null) {
        lu[0] = i;
      }
      if (lu[1] === null || firstFilePosition < lu[1]) {
        lu[1] = firstFilePosition;
      }
    }

    if (!lu.includes(null) && lastFilePosition > -1) {
      rd[0] = i + 1;
      if (rd[1] === null || rd[1] < lastFilePosition + 1) {
        rd[1] = lastFilePosition + 1;
      }
    }
  });

  return [...lu, ...rd];
}

console.log(solution([".#...", "..#..", "...#."])); // [0, 1, 3, 4]

console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
); // [1, 3, 5, 8]

console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
); // [0, 0, 7, 9]

console.log(solution(["..", "#."])); // [1, 0, 2, 1]
