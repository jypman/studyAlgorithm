// 다리를 지나는 트럭
// bridge_length는 트럭 한대가 다리를 건너는 시간도 의미한다.
function solution(bridge_length, weight, truck_weights) {
  let result = 0;
  let sum = 0;
  const queue = [...truck_weights];
  const passing = [];

  while (queue.length !== 0 || passing.length !== 0) {
    if (weight >= sum + queue[0] && passing.length <= bridge_length) {
      const truck = queue.shift();
      sum += truck;
      passing.push([truck, result + bridge_length]);
      result++;
    } else {
      const [truck, passedSec] = passing.shift();
      if (result < passedSec) {
        result = passedSec;
      }
      sum -= truck;
    }
  }

  return result + 1;
}

// 8
console.log(solution(2, 10, [7, 4, 5, 6]));

// 101
console.log(solution(100, 100, [10]));

// 110
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
