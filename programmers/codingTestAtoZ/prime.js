// 에라토스테네스의 체

function getPrimes(num) {
  const prime = [false, false, ...Array.from({ length: num - 1 }, () => true)];

  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false; // 소수가 아닌 것들은 false로 값을 바꾼다.
      }
    }
  }

  return prime.filter(Boolean).length; // true인 아이템의 갯수를 구한다.
}

console.log(getPrimes(54));
