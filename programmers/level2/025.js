// 기능개발

function solution(progresses, speeds) {
  const restDays = [];
  const result = [1];

  progresses.forEach((progress, index) => {
    const restProcess = 100 - progress;
    const day = restProcess / speeds[index];
    restDays.push(Math.ceil(day));
  });

  let queue = [...restDays];
  restDays.forEach((day, index) => {
    if (index !== 0) {
      if (queue[0] < day) {
        queue.splice(0, result[result.length - 1]);
        result.push(1);
      } else {
        result[result.length - 1] += 1;
      }
    }
  });

  return result;
}

// [2,1]
console.log(solution([93, 30, 55], [1, 30, 5]));

// [1, 3, 2]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

// [6]
console.log(solution([1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]));

// [5]
console.log(solution([95, 96, 97, 98, 99], [1, 1, 1, 1, 1, 1]));
