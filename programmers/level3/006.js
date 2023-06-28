// 섬 연결하기
// 최소 신장 트리 (kruskal 알고리즘)로 풀이 가능

// 각 원소의 최상위 원소가 서로 같은지 확인
function compare(parent, a, b) {
  const A = find(parent, a);
  const B = find(parent, b);
  return A === B;
}

// 원소의 최상위 원소를 반환
// 만약 원소의 최상위 원소가 자기 자신이면 자기자신은 최상위 원소임
function find(parent, x) {
  if (parent[x] === x) return x;

  return (parent[x] = find(parent, parent[x]));
}

// 원소의 최상위 원소를 할당하는 함수
// 즉 최소신장만 남겨놓는 로직
function union(parent, a, b) {
  const A = find(parent, a);
  const B = find(parent, b);

  if (A < B) parent[B] = A;
  else parent[A] = B;
}

function solution(n, costs) {
  const sortCosts = [...costs].sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: n }, (_, index) => index);

  let result = 0;

  sortCosts.forEach(([a, b, cost]) => {
    if (!compare(parent, a, b)) {
      result += cost;
      union(parent, a, b);
    }
  });

  return result;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
); // 4
