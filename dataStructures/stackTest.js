import Stack from "./stack.js";

let stack = new Stack()

console.log('isEmpty :', stack.isEmpty())

stack.push(5)
stack.push(8)

console.log('peek :', stack.peek())

stack.push(11)

console.log('items :',stack.print())
console.log('size :', stack.size())
console.log('isEmpty :', stack.isEmpty())
console.log('pop한 원소 :',stack.pop())

stack.clear()

console.log('isEmpty :', stack.isEmpty())
console.log('items :',stack.print())