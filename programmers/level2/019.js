// 전력망을 둘로 나누기

function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  let result = Infinity;

  // 그래프 초기화
  wires.forEach(([src, dest]) => {
    graph[src].push(dest);
    graph[dest].push(src);
  });

  // 결과값 갱신
  wires.forEach(([src, dest]) => {
    const len1 = breakWire(graph, src, dest);
    const len2 = n - len1;

    result = Math.min(result, Math.abs(len1 - len2));
  });

  return result;
}

function breakWire(graph, src, dest) {
  const tempGraph = graph.map((elem) => [...elem]);

  tempGraph[src] = tempGraph[src].filter((elem) => elem !== dest);
  tempGraph[dest] = tempGraph[dest].filter((elem) => elem !== src);

  // const result = getLength(tempGraph, src, [src]);
  // console.log("result: ", result);
  // return result;

  return getLength(tempGraph, src, [src]);
}

function getLength(graph, prev, visited) {
  const nexts = graph[prev];

  for (const next of nexts) {
    if (visited.includes(next)) continue;

    visited.push(next);

    getLength(graph, next, visited);
  }

  // console.log("visit:", visited);
  return visited.length;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4], //
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
); // 6 - 3 = 3

console.log(
  solution(4, [
    [1, 2],
    [2, 3], //
    [3, 4],
  ])
); // 2 - 2 = 0

console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7], //
    [3, 4],
    [4, 5],
    [6, 7],
  ])
); // 1
