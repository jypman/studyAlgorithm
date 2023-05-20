export function Node(element) {
  this.element = element;
  this.next = null;
}

export function LinkedList() {
  let length = 0;
  let head = null;
  // 리스트의 맨끝에 새로운 노드 추가
  this.append = function (element) {
    const node = new Node(element);
    let current;
    if (head === null) head = node;
    else {
      // 처음 노드부터 루프가 시작되도록 current를 head로 설정한다.
      current = head;
      while (current.next) current = current.next;
      current.next = node;
    }
    length++;
  };
  // 특정 위치에 있는 노드 삭제
  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;
      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };
  // 특정 위치에 노드 추가
  this.insert = function (position, element) {
    if (-1 < position && position <= length) {
      const node = new Node(element);
      let current = head,
        previous,
        index = 0;
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };
  // 각 노드에 저장된 숫자 데이터들을 문자열로 출력
  this.toString = function () {
    let current = head,
      resultArray = [];
    while (current) {
      resultArray.push(current.element);
      current = current.next;
    }
    return resultArray.join();
  };
  this.indexOf = function (element) {
    let current = head,
      index = -1;
    while (current) {
      if (element === current.element) return index;
      index++;
      current = current.next;
    }
    return -1;
  };
  // 특정 값을 갖는 노드 삭제
  this.remove = function (element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  };
  this.isEmpty = function () {
    return length === 0;
  };
  this.size = function () {
    return length;
  };
  this.getHead = function () {
    return head;
  };
}
