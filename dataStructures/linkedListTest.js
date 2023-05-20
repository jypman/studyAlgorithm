import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append(15);
list.append(11);
list.append(10);
console.log(list.removeAt(2));
console.log(list.insert(1, 20));
console.log(list.toString());
console.log(list.indexOf(20));
console.log(list.remove(20));
console.log(list.isEmpty());
console.log(list.size());
console.log(list.getHead());
