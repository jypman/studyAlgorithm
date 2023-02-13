function ArrayList() {
  let array = [];

  const swap = function (curIdx, nextIdx) {
    const aux = array[curIdx];
    array[curIdx] = array[nextIdx];
    array[nextIdx] = aux;
  };

  this.insert = function (item) {
    array.push(item);
  };

  this.parseString = function () {
    return array.join();
  };

  this.bubbleSort = function () {
    const length = array.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) swap(j, j + 1);
      }
    }
  };

  this.selectionSort = function () {
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
      let indexMin = i;
      for (let j = i; j < length; j++) {
        if (array[indexMin] > array[j]) indexMin = j;
        if (i !== indexMin) swap(i, indexMin);
      }
    }
  };

  this.insertionSort = function () {
    const length = array.length;

    for (let i = 1; i < length; i++) {
      let j = i;
      let temp = array[i];

      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  };

  this.mergeSort = function () {
    const merge = function (left, right) {
      const result = [];
      let il = 0;
      let ir = 0;

      while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) result.push(left[il++]);
        else result.push(right[ir++]);
      }

      while (il < left.length) {
        result.push(left[il++]);
      }

      while (ir < right.length) {
        result.push(right[ir++]);
      }

      return result;
    };

    const mergeSortRec = function (array) {
      const length = array.length;
      if (length === 1) return array;

      const mid = Math.floor(length / 2);
      const left = array.slice(0, mid);
      const right = array.slice(mid, length);
      return merge(mergeSortRec(left), mergeSortRec(right));
    };

    array = mergeSortRec(array);
  };
}

/** 테스트 코드 */

let array = new ArrayList();

array.insert(5);
array.insert(4);
array.insert(3);
array.insert(2);
array.insert(1);

console.log(array.parseString());

// array.bubbleSort();
// array.selectionSort();
// array.insertionSort();
array.mergeSort();

console.log(array.parseString());
