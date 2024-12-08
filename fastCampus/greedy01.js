/**
 * @see https://www.acmicpc.net/problem/11047
 * */

const solution = (amount) => {
  let rest = amount;

  const coinList = [1, 5, 10, 50, 100, 500, 1000, 10000, 50000];

  const result = coinList.reverse().reduce((total, coin) => {
    if (rest === 0) return total;

    const count = Math.floor(rest / coin);

    if (count === 0) return total;

    rest = Math.floor(rest % coin);

    return total + count;
  }, 0);

  return result;
};

console.log(solution(4200));
console.log(solution(4790));
