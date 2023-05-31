// 아이템 줍기

function solution(rectangle, characterX, characterY, itemX, itemY) {
  const MAX = 102; // 좌표는 1부터 최대 50이며 좌표를 두배로 함으로 좌표 최대값도 두배 -> 51 * 2
  const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const POINTS = {
    EMPTY: 0,
    BORDER: 1,
    CORNER: 2,
    BLOCK: 3,
    TARGET: 4,
  };
  const map = Array.from({ length: MAX }, () =>
    Array.from({ length: MAX }, () => POINTS.EMPTY)
  );

  // 블락일 땐 블락, 빈 값일 땐 보더, 보더일 땐 코너
  function getBorderPoint(val) {
    if (val === POINTS.BLOCK) return POINTS.BLOCK;
    if (val === POINTS.EMPTY) return POINTS.BORDER;
    if (val === POINTS.BORDER) return POINTS.CORNER;
  }

  rectangle.forEach(([xl, yl, xr, yr]) => {
    // 좌표 두배 확대
    const XL = xl * 2;
    const YL = yl * 2;
    const XR = xr * 2;
    const YR = yr * 2;

    // 사각형 전체 보더로 칠하기
    // 테두리는 블락 or 보더
    // 단 테두리 안쪽은 블락으로 칠하기
    for (let y = YL + 1; y < YR; y++) {
      map[y][XL] = getBorderPoint(map[y][XL]);
      map[y][XR] = getBorderPoint(map[y][XR]);
      map[y][XL + 1] = POINTS.BLOCK;
      map[y][XR - 1] = POINTS.BLOCK;
    }

    for (let x = XL + 1; x < XR; x++) {
      map[YL][x] = getBorderPoint(map[YL][x]);
      map[YR][x] = getBorderPoint(map[YR][x]);
      map[YL + 1][x] = POINTS.BLOCK;
      map[YR - 1][x] = POINTS.BLOCK;
    }

    // 꼭지점이 곧 코너를 의미하므로 코너로 칠하기
    // 예 : [1,1,7,4]
    map[YL][XL] = POINTS.CORNER; // map[1][1]
    map[YR][XL] = POINTS.CORNER; // map[4][1]
    map[YL][XR] = POINTS.CORNER; // map[1][7]
    map[YR][XR] = POINTS.CORNER; // map[4][7]
  });

  const ITEM_Y = itemY * 2;
  const ITEM_X = itemX * 2;
  const CHARACTER_Y = characterY * 2;
  const CHARACTER_X = characterX * 2;

  map[ITEM_Y][ITEM_X] = POINTS.TARGET;
  map[CHARACTER_Y][CHARACTER_X] = POINTS.BLOCK;

  let ans = Number.MAX_SAFE_INTEGER;

  // 현 캐릭터 위치에서 4방향 탐색
  for (let dir = 0; dir < 4; dir++) {
    let y = CHARACTER_Y + moves[dir][0];
    let x = CHARACTER_X + moves[dir][1];

    // 코너나 보더가 아니면 탐색을 멈춘다.
    if (map[y][x] !== POINTS.CORNER && map[y][x] !== POINTS.BORDER) continue;

    let curDir = dir;
    let count = 1;

    // 타겟을 만날 때까지 이동
    while (map[y][x] !== POINTS.TARGET) {
      // 코너일 땐 방향 전환
      if (map[y][x] === POINTS.CORNER) {
        for (let candDir = 0; candDir < 4; candDir++) {
          // 현 방향(=curDir)이나, 반대 방향(=(curDir + 2) % 4)은 넘어가기
          if ([curDir, (curDir + 2) % 4].includes(candDir)) continue;

          const ny = y + moves[candDir][0];
          const nx = x + moves[candDir][1];

          // 최대 맵 범위를 넘어가지 않도록 엣지케이스 추가
          if (ny < 0 || ny >= MAX || nx < 0 || nx >= MAX) continue;

          // 다음 방향에 타겟이거나 보더면 현재 방향을 다음 방향으로 바꿔준다.
          if (![POINTS.EMPTY, POINTS.BLOCK].includes(map[ny][nx])) {
            curDir = candDir;
            break;
          }
        }
      }

      // 현재 도착한 곳은 이제 다시 되돌아올 수 없음으로 블럭 처리한다.
      map[y][x] = POINTS.BLOCK;
      y += moves[curDir][0];
      x += moves[curDir][1];
      count++;
    }

    ans = Math.min(ans, count);
  }

  // 좌표를 두 배로 확대했으니 정답은 절반으로 나누기
  return ans / 2;
}

console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
); // 17

console.log(
  solution(
    [
      [1, 1, 8, 4],
      [2, 2, 4, 9],
      [3, 6, 9, 8],
      [6, 3, 7, 7],
    ],
    9,
    7,
    6,
    1
  )
); // 11

console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7)); // 9

console.log(
  solution(
    [
      [2, 1, 7, 5],
      [6, 4, 10, 10],
    ],
    3,
    1,
    7,
    10
  )
); // 15

console.log(
  solution(
    [
      [2, 2, 5, 5],
      [1, 3, 6, 4],
      [3, 1, 4, 6],
    ],
    1,
    4,
    6,
    3
  )
); // 10
