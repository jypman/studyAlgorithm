function Queue() {
  let items = [];
  let frontIndex = 0;
  let rearIndex = 0;

  this.enqueue = function (elem) {
    items[rearIndex++] = elem;
  };

  // dequeue에서 shift()를 안 쓰는 이유
  // shift()를 쓸 경우 o(n)의 선형시간으로 구현되기 때문에 o(1)의 시간복잡도를 갖는 큐와는 맞지 않으므로 shift()를 쓰지 않는다.
  this.dequeue = function () {
    const value = items[frontIndex];
    delete items[frontIndex];
    frontIndex += 1;
    return value;
  };

  this.front = function () {
    return items[frontIndex];
  };

  this.isEmpty = function () {
    return items.every((val) => typeof val === "undefined");
  };

  this.size = function () {
    return rearIndex - frontIndex;
  };

  this.print = function () {
    return items;
  };
}

export default Queue;
