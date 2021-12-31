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

export default Stack;