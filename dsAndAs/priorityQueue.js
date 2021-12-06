function PriorityQueue() {
    let items = []

    function QueueElem(elem, priority) { // (1)
        this.elem = elem
        this.priority = priority
    }

    this.enqueue = function (elem, priority) {
        let queueElem = new QueueElem(elem, priority)

        if (this.isEmpty()) {
            items.push(queueElem) // (2)
        } else {
            let added = false

            items.forEach((item, i) => {
                if(queueElem.priority < item.priority){
                    items.splice(i, 0, queueElem) // (3)
                    return added = true // (4)
                }
            })

            if(!added) items.push(queueElem) // (5)
        }
    }

    this.isEmpty = function () {
        return items.length === 0
    }

    this.print = function () {
        return items
    }

    // 그 밖의 메소드는 기본 큐와 동일하다.
}

let priorityQueue = new PriorityQueue()

priorityQueue.enqueue("jyp",2)
priorityQueue.enqueue("fgh",1)
priorityQueue.enqueue("asd",1)

console.log('print :', priorityQueue.print())