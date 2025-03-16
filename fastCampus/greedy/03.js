/**
 * @see https://www.acmicpc.net/problem/1541
 * */

const solution = (formula) => {
  const splitList = formula.split("-");

  const positiveNumList = splitList.map((formula) => {
    const splitList = formula.split("+");

    return [...splitList].reduce((acc, cur) => acc + Number(cur), 0);
  });

  const negativeNumList = positiveNumList.reduce((acc, cur, index) => {
    if (index === 0) return Number(cur);

    return acc - Number(cur);
  }, 0);

  console.log("result", negativeNumList);

  return negativeNumList;
};

solution("55-50+40");
solution("10+20+30+40");
solution("00009-00009");
