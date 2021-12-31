import Queue from "./queue.js";

const queue = new Queue()

console.log('isEmpty :', queue.isEmpty())

queue.enqueue("jyp")
queue.enqueue("fgh")

console.log('front 요소 :', queue.front())
console.log('items :', queue.print())
console.log('제거될 요소 :', queue.dequeue())
console.log('items :', queue.print())
console.log('제거될 요소 :', queue.dequeue())
console.log('isEmpty :', queue.isEmpty())
console.log('items :', queue.print())