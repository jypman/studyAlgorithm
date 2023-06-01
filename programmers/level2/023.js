function solution(name) {
  let alpha = [...name];
  const A = "A".charCodeAt(0);
  const Z = "Z".charCodeAt(0);

  // 문자를 바꾸기 위한 상하 조이스틱 횟수
  const changeCount = alpha.reduce((acc, cur) => {
    if (cur === "A") return acc;

    if (cur.charCodeAt(0) - A <= Z + 1 - cur.charCodeAt(0)) {
      return acc + cur.charCodeAt(0) - A;
    } else {
      return acc + Z + 1 - cur.charCodeAt(0);
    }
  }, 0);

  // 각 문자로 이동하기 위한 좌우 조이스틱 횟수
  // 최대 횟수는 문자갯수에서 하나를 뺸 횟수이며 이 값부터 시작하여 최솟값을 구해보자.
  let moveCount = alpha.length - 1;

  // 왼쪽에서 오른쪽으로 혹은 오른쪽에서 왼쪽으로 즉 두 방향의 경우의 수를 따져 최솟값을 구하기 위해 두번 반복
  for (let times = 0; times < 2; times++) {
    for (let i = 0; i < name.length; i++) {
      let j = i + 1;
      while (i < j && alpha[j] === "A") {
        j = (j + 1) % name.length;
      }
      moveCount = Math.min(
        moveCount,
        i + ((name.length + i - j) % name.length)
      );
    }

    // 왼쪽에서 오른쪽으로 혹은 오른쪽에서 왼쪽으로 즉 두 방향의 경우의 수를 따져 최솟값을 구하기 위해 문자열을 변환
    // 예 :[ 'J', 'E', 'R', 'O', 'E', 'N' ], [ 'J', 'N', 'E', 'O', 'R', 'E' ]
    const tmp = alpha[0];
    alpha = alpha.slice(1).reverse();
    alpha.unshift(tmp);
  }

  return changeCount + moveCount;
}

console.log(solution("JEROEN")); // 56
console.log(solution("JAN")); // 23
console.log(solution("JAZ")); // 11
console.log(solution("AAAAC")); // 3
