// 이진트리 힙을 이용한 알고리즘 풀이
class MyMaxHeap {
  constructor() {
    this.heap = [null];
  }
  push(val) {
    this.heap.push(val);
    // 현재 인덱스는 가장 아래 레벨부터 위 레벨순으로 바뀐다.
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    // 정점이 최대 두개가 있어야 비교가 가능하기 떄문에 parentIndex는 꼭 0 이상이어야 한다.
    while (parentIndex !== 0 && this.heap[parentIndex] < val) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = val;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
  pop() {
    const returnVal = this.heap[1];

    if (this.heap.length === 2) return this.heap.pop();
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      const temp = this.heap[currentIndex];

      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnVal;
  }
  print() {
    return this.heap.slice(1);
  }
}
function solution(no, works) {
  if (works.reduce((acc, cur) => acc + cur, 0) <= no) {
    return 0;
  }

  const maxHeap = new MyMaxHeap();

  works.forEach((val) => {
    maxHeap.push(val);
  });

  for (let i = 0; i < no; i++) {
    maxHeap.push(maxHeap.pop() - 1);
  }

  return maxHeap.print().reduce((acc, cur) => {
    return acc + cur ** 2;
  }, 0);
}

console.log("테스트 :", solution(4, [4, 3, 3]));
console.log("테스트 :", solution(2, [3, 3, 3]));
