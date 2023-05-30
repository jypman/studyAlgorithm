// 여행 경로

function solution(tickets) {
  const graph = tickets.reduce((acc, [from, to]) => {
    if (!acc[from]) acc[from] = [to];
    else acc[from] = [...acc[from], to].sort().map((f, i) => `${f}${i}`); // 중복된 티켓에 대한 엣지 케이스
    return acc;
  }, {});

  let visited = [];
  let path = ["ICN"];

  function dfs(from) {
    if (graph[from]) {
      const pCache = [...path];
      const vCache = [...visited];

      for (let i = 0; i < graph[from].length; i++) {
        // console.log("from", from, "visited", visited);
        const to = graph[from][i];

        // 아직 사용하지 않은 티켓이 있는 경우
        // 사용한 티켓 중 아직 사용하지 않은 티켓과 같은 티켓이 있을 수 있으므로 이로 인해 발생할 수 있는 버그 방지
        if (!visited.find(([vFrom, vTo]) => vFrom === from && vTo === to)) {
          const realTo = to.replace(/[0-9]/g, "");
          // 해당 티켓 사용 처리
          visited.push([from, to]);
          // 여행 경로에 추가
          path.push(realTo);

          // 만약 모든 티켓을 사용하지 못한 경우 이전 상태로 원상복구
          if (!dfs(realTo)) {
            path = pCache;
            visited = vCache;
          }
        }
      }
    }

    return tickets.length === visited.length;
  }

  dfs("ICN");

  return path;
}

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"];

console.log(
  solution([
    ["ICN", "BOO"],
    ["ICN", "COO"],
    ["BOO", "DOO"],
    ["BOO", "ICN"],
    ["COO", "BOO"],
    ["COO", "DOO"],
    ["DOO", "BOO"],
    ["DOO", "COO"],
  ])
);
// [
// "ICN", "BOO",
// "DOO", "BOO",
// "ICN", "COO",
// "DOO", "COO",
// "BOO"
// ];

console.log(
  solution([
    ["ICN", "AAA"],
    ["ICN", "AAA"],
    ["ICN", "AAA"],
    ["AAA", "ICN"],
    ["AAA", "ICN"],
  ])
); // ["ICN", "AAA", "ICN", "AAA", "ICN", "AAA"]

console.log(
  solution([
    ["ICN", "A"],
    ["A", "B"],
    ["A", "C"],
    ["C", "A"],
    ["B", "D"],
  ])
); // ["ICN", "A", "C", "A", "B", "D"]

console.log(
  solution([
    ["ICN", "JFK"],
    ["ICN", "AAD"],
    ["JFK", "ICN"],
  ])
); // ["ICN", "JFK", "ICN", "AAD"]
