function binarySearch(rangeArray, findVal) {
  let left = 0;
  let right = rangeArray.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (rangeArray[mid] === findVal) {
      return mid;
    }

    if (rangeArray[mid] < findVal) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

console.log(binarySearch([1, 3, 4, 30, 41, 42, 49, 52, 100], 1));
console.log(
  binarySearch([6, 10, 21, 100, 111, 121, 139, 200, 1000, 2000, 5000], 1000)
);
