/**
 * @see https://www.acmicpc.net/problem/11399
 * */

const solution = (personList) => {
  const ascList = personList.sort((a, b) => a - b);

  let prev = 0;

  const result = ascList.map((item) => {
    const curCount = item + prev;
    prev = curCount;
    return curCount;
  });

  return result.reduce((acc, cur) => acc + cur, 0);
};

console.log(solution([3, 1, 4, 3, 2]));
