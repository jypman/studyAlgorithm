function solution(n, vertex) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [src, dest] of vertex) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array.from({ length: n + 1 }, () => 0);
  distance[1] = 1;

  const queue = [1];

  while (queue.length > 0) {
    const src = queue.shift();
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  const max = Math.max(...distance);
  return distance.filter((elem) => elem === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
