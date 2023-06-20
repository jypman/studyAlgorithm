// 공원 산책

function solution(park, routes) {
  const dogPosition = park.reduce(
    (acc, cur, index) => {
      return cur.indexOf("S") > -1 ? [index, cur.indexOf("S")] : acc;
    },
    [null, null]
  );

  routes.forEach((route) => {
    let [dir, count] = route.split(" ");
    count = parseInt(count, 10);

    switch (dir) {
      case "N":
        for (let i = 1; i <= count; i++) {
          if (
            dogPosition[0] - i === -1 ||
            park[dogPosition[0] - i][dogPosition[1]] === "X"
          ) {
            return;
          }
        }
        dogPosition[0] -= count;
        break;
      case "S":
        for (let i = 1; i <= count; i++) {
          if (
            dogPosition[0] + i === park.length ||
            park[dogPosition[0] + i][dogPosition[1]] === "X"
          ) {
            return;
          }
        }
        dogPosition[0] += count;
        break;
      case "W":
        for (let i = 1; i <= count; i++) {
          if (
            dogPosition[1] - i === -1 ||
            park[dogPosition[0]][dogPosition[1] - i] === "X"
          ) {
            return;
          }
        }
        dogPosition[1] -= count;
        break;
      case "E":
        for (let i = 1; i <= count; i++) {
          if (
            dogPosition[1] + i === park[0].length ||
            park[dogPosition[0]][dogPosition[1] + i] === "X"
          ) {
            return;
          }
        }
        dogPosition[1] += count;
        break;
      default:
        break;
    }
  });

  return dogPosition;
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2,1]
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0,1]
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0,0]
console.log(solution(["SOO", "OOO", "XOO"], ["S 1"])); // [1, 0]
console.log(solution(["OOO", "OSO", "OOO", "OOO"], ["N 2", "S 2"])); // [3, 1]
console.log(solution(["OXO", "XSX", "OXO"], ["S 1", "E 1", "W 1", "N 1"])); // [1, 1]
console.log(solution(["OXXO", "XSXO", "XXXX"], ["E 1", "S 1"])); // [1, 1]
console.log(solution(["SOOOX", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["E 3"])); // [0, 3]
