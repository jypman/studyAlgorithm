function Stack() {
    let items = [];

    this.push = function (elem) {
        items.push(elem)
    }

    this.pop = function () {
        return items.pop()
    }

    this.peek = function () {
        return items[items.length - 1]
    }

    this.isEmpty = function () {
        return items.length === 0
    }

    this.clear = function () {
        items = []
    }

    this.size = function () {
        return items.length
    }

    this.print = function () {
        return items
    }
}

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