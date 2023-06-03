class MinHeap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(val) {
    this.heap.push(val);
    let curIndex = this.heap.length - 1;
    let parentIndex = Math.floor(curIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex].cost > val.cost) {
      this.swap(parentIndex, curIndex);
      curIndex = parentIndex;
      parentIndex = Math.floor(curIndex / 2);
    }
  }
  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnVal = this.heap[1];
    this.heap[1] = this.heap.pop();
    let curIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      (this.heap[leftIndex] &&
        this.heap[curIndex].cost > this.heap[leftIndex].cost) ||
      (this.heap[rightIndex] &&
        this.heap[curIndex].cost > this.heap[rightIndex].cost)
    ) {
      if (this.heap[leftIndex] === undefined) {
        this.swap(curIndex, rightIndex);
      } else if (this.heap[rightIndex] === undefined) {
        this.swap(curIndex, leftIndex);
      } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
        this.swap(curIndex, rightIndex);
      } else if (this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
        this.swap(curIndex, leftIndex);
      }
      leftIndex = curIndex * 2;
      rightIndex = curIndex * 2 + 1;
    }

    return returnVal;
  }
  isEmpty() {
    return this.heap.length === 1; // [null]에 대한 엣지 케이스
  }
}

function dijkstraSolution(road, N) {
  const heap = new MinHeap();

  heap.push({ node: 1, cost: 0 });

  const distance = Array.from({ length: N + 1 }, (_, index) => {
    if (index === 1) return 0;
    return Infinity;
  });

  while (!heap.isEmpty()) {
    const { node: curNode, cost: curCost } = heap.pop();

    for (const [src, dest, cost] of road) {
      const nextCost = curCost + cost;
      if (src === curNode && nextCost < distance[dest]) {
        distance[dest] = nextCost;
        heap.push({ node: dest, cost: nextCost });
      } else if (dest === curNode && nextCost < distance[src]) {
        distance[src] = nextCost;
        heap.push({ node: src, cost: nextCost });
      }
    }
  }

  return distance;
}

function solution(N, road, K) {
  return dijkstraSolution(road, N).filter((elem) => elem <= K).length;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
); // 4

console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
); // 4
