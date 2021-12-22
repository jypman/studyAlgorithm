function Queue() {
    let items = [];

    this.enqueue = function (elem) {
        items.push(elem)
    }

    this.dequeue = function () {
        return items.shift()
    }

    this.front = function () {
        return items[0]
    }

    this.isEmpty = function () {
        return items.length === 0
    }

    this.size = function () {
        return items.length
    }

    this.print = function () {
        return items
    }
}

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
