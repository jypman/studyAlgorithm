// 프로세스

function solution(priorities, location) {
  const array = [];

  const queue = priorities.map((priority, index) => {
    return { val: priority, index };
  });

  while (queue.length !== 0) {
    const temp = queue.shift();
    if (
      queue.length === 0 ||
      temp.val >= Math.max(...queue.map((elem) => elem.val))
    ) {
      array.push(temp);
    } else {
      queue.push(temp);
    }
  }

  return array.reduce((acc, cur, index) => {
    return cur.index === location ? index + 1 : acc;
  }, 0);
}

console.log(solution([2, 1, 3, 2], 2)); // 1

console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
