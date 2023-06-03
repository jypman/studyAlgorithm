function solution(priorities, location) {
  const queue = priorities.map((val, index) => ({
    prior: val,
    location: index,
  }));

  let frontIndex = 0;
  let result = 0;

  while (true) {
    const frontVal = queue[frontIndex].prior;

    if (
      frontVal >=
      Math.max.apply(
        null,
        queue.slice(frontIndex).map((obj) => parseInt(obj.prior))
      )
    ) {
      if (location === queue[frontIndex].location) return result + 1;
      result += 1;
    } else {
      queue.push(queue[frontIndex]);
    }

    delete queue[frontIndex];
    frontIndex += 1;
  }
}

console.log(solution([2, 1, 3, 2], 2)); //1
console.log(solution([1, 1, 9, 1, 1, 1, 1], 1)); // 7
console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5
