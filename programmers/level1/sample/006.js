// 부족한 금액 계산하기

function solution(price, money, count) {
  if (price < 1) return;
  if (2500 < price) return;
  if (money < 1) return;
  if (1000000000 < money) return;
  if (count < 1) return;
  if (2500 < count) return;

  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }
  const budget = money - totalPrice;
  return budget < 0 ? budget * -1 : 0;
}
