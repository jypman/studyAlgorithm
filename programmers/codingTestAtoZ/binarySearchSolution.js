// 최소 소요 시간의 범위는 1분 ~ 1,000,000,000분 * 입국자 수
// 최소 소요 시간이 정해져 있을 때 한 심사관이 처리할 수 있는 인원수 : 최소 소요 시간 / 심사관의 작업처리 시간
// 최소 소요 시간을 구해야 하고 해당 시간의 범위가 확실히 정해져 있을 때 이진 탐색을 사용해보자!
function solution(n, times) {
  let min = 0;
  let max = Math.max.apply(null, times) * n;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    // 각 심사관 당 처리할 수 있는 최대 인원수를 모두 더한다.
    const sumDealCount = times.reduce(
      (acc, cur) => acc + Math.floor(mid / cur),
      0
    );
    // sumDealCount가 입국자 수 n보다 적으면 최소 소요 시간은 mid보다 더 오래 걸리므로 최소 범위를 mid보다 크게 한다.
    if (sumDealCount < n) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return min;
}
