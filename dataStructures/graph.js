// 그래프(인접리스트)
import Dictionary from "./dictionary.js"
import Queue from "./queue.js";

function Graph() {
    let vertices = []
    const adjList = new Dictionary()
    this.addVertex = function (v) {
        vertices.push(v)
        adjList.set(v, [])
    }
    this.addEdge = function (v, w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }
    this.toString = function () {
        let s = ''
        vertices.forEach(vertex => {
            s += vertex + '->'
            const neighbors = adjList.get(vertex)
            neighbors.forEach(neighbor => {
                s += neighbor + ' '
            })
            s += '\n'
        })
        return s
    }
    // gray = '방문했지만 탐색x 정점', white = '아직 방문하지 않은 정점', black = '방문 및 탐색을 완료한 정점'
    this.bfs = function (startV, callback) {
        let color = initializeColor()
        const queue = new Queue()
        queue.enqueue(startV)

        while (!queue.isEmpty()){
            const u = queue.dequeue()
            const neighbors = adjList.get(u)
            color[u] = 'gray'
            neighbors.forEach(neighbor => {
                if(color[neighbor] === 'white'){
                    color[neighbor] = 'gray'
                    queue.enqueue(neighbor) // u의 인접 정점들을 큐에 추가한다.
                }
            })
            color[u] = 'black'
            if(callback) callback(u)
        }
    }

    function initializeColor() {
        let color = {}
        vertices.forEach(vertex => {
            color[vertex] = 'white';
        })
        return color;
    }
}

function printNode(vertex) {
    console.log('탐색이 끝난 정점 :', vertex)
}

const graph = new Graph()

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

myVertices.forEach( myVertex => {
    graph.addVertex(myVertex)
})

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString())

graph.bfs(myVertices[0], printNode)