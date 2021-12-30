// 그래프(인접리스트)
import Dictionary from "./dictionary.js"

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