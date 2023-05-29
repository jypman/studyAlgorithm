// 게임 맵 최단거리

function solution(maps) {
  const fail = -1;
  const xLength = maps[0].length;
  const yLength = maps.length;
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  let queue = [[0, 0, 1]];

  while (queue.length > 0) {
    const [x, y, step] = queue.shift();
    if (x === xLength - 1 && y === yLength - 1) return step;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (xLength <= nx || nx < 0 || yLength <= ny || ny < 0) continue;
      if (maps[ny][nx] === 0) continue;
      maps[ny][nx] = 0;
      queue.push([nx, ny, step + 1]);
    }
  }

  return fail;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // -1
