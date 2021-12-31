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

export default Queue;
