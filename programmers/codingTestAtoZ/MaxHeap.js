class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(val) {
    this.heap.push(val);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

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
    // 루트를 비우기 위해 힙의 맨 앞에 빈 요소를 넣어준다.
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
    return this.heap;
  }
}

const heap = new MaxHeap();

heap.push(4);
heap.push(3);
heap.push(6);
heap.push(10);

console.log(heap.print());

heap.pop(10);

console.log(heap.print());
