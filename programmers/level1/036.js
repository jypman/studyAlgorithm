// 최소 직사각형

function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;
  const sortSizes = sizes.map((elem) => elem.sort((a, b) => b - a));

  sortSizes.forEach(([width, height]) => {
    if (maxWidth < width) maxWidth = width;
    if (maxHeight < height) maxHeight = height;
  });

  return maxWidth * maxHeight;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
