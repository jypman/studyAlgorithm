// 네트워크

function solution(n, computers) {
  const graph = Array.from({ length: n }, () => []);
  let result = 0;
  let visitedVertex = [];

  computers.forEach((computerArray, index) => {
    computerArray.forEach((computer, idx) => {
      if (index !== idx && computer === 1) graph[index].push(idx);
    });
  });

  for (let i = 0; i < n; i++) {
    if (!visitedVertex.includes(i)) {
      visitedVertex.push(i);
      result++;
      dfs(graph, i, visitedVertex);
    }
  }

  return result;
}

function dfs(graph, prev, visited) {
  const nextArray = graph[prev];

  for (const next of nextArray) {
    if (visited.includes(next)) continue;

    visited.push(next);
    dfs(graph, next, visited);
  }

  return visited;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // 1
