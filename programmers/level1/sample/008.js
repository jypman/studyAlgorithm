// 예산

function solution(d, budget) {
  if (d.length < 1) return;
  if (100 < d.length) return;
  if (budget < 1) return;
  if (10_000_000 < budget) return;

  let curBudget = budget;
  return d
    .sort((a, b) => a - b)
    .reduce((acc, cur) => {
      if (0 <= curBudget - cur) {
        curBudget -= cur;
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
}
