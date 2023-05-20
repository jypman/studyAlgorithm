export function LinkedList() {
  let length = 0;
  let head = null;
  const Node = function (element) {
    this.element = element;
    this.next = null;
  };
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
  // 특정 위치에 있는 원소를 삭제
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
  // 노드에 추가된 숫자 원소들이 문자열로 바뀌어 문자열끼리 합친 후 출력
  this.toString = function () {
    let current = head,
      string = "";
    while (current) {
      string += current.element;
      current = current.next;
    }
    return string;
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
  // 특정 원소의 값을 삭제
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
