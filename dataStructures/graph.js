// 그래프(인접리스트)
import Dictionary from "./dictionary.js";
import Queue from "./queue.js";
import Stack from "./stack.js";

function Graph() {
  let vertices = [];
  const adjList = new Dictionary();
  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []);
  };
  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };
  this.toString = function () {
    let s = "";
    vertices.forEach((vertex) => {
      s += vertex + "->";
      const neighbors = adjList.get(vertex);
      neighbors.forEach((neighbor) => {
        s += neighbor + " ";
      });
      s += "\n";
    });
    return s;
  };

  /** white = '방문x 탐색x 정점'
   ** gray = '방문o 탐색x 정점'
   ** black = '방문 o 탐색o 정점'
   */
  this.bfs = function (startV, callback) {
    let color = initializeColor();
    const queue = new Queue();
    queue.enqueue(startV);

    while (!queue.isEmpty()) {
      const u = queue.dequeue();
      color[u] = "gray";
      const neighbors = adjList.get(u);
      neighbors.forEach((neighbor) => {
        if (color[neighbor] === "white") {
          color[neighbor] = "gray";
          queue.enqueue(neighbor); // u의 인접 정점들을 큐에 추가한다.
        }
      });
      color[u] = "black";
      if (callback) callback(u);
    }
  };

  this.BFS = function (myVertices) {
    const fromVertex = myVertices[0];
    const color = initializeColor();
    const queue = new Queue();
    const distance = {}; // 정점간의 거리 = 간선의 갯수
    const predecessor = {}; // v에서 다른 모든 정점 u까지의 최단 경로를 계산하기 위한 선행자

    queue.enqueue(fromVertex);

    vertices.forEach((item) => {
      distance[item] = 0;
      predecessor[item] = null;
    });

    while (!queue.isEmpty()) {
      const u = queue.dequeue();
      const neighbors = adjList.get(u);

      color[u] = "gray";

      neighbors.forEach((item) => {
        if (color[item] === "white") {
          color[item] = "gray";
          distance[item] = distance[u] + 1;
          predecessor[item] = u;

          queue.enqueue(item);
        }
      });

      color[u] = "black";
    }

    /** 시작 정점에서 특정 정점 간 거리 정보 */
    const shortestPathA = {
      fromVertex,
      distances: distance,
      predecessors: predecessor,
    };
    console.log(shortestPathA);

    /** 시작 정점에서 특정 정점까지의 경로 정보 */
    myVertices.forEach((toVertex) => {
      const path = new Stack();
      for (
        let v = toVertex;
        v !== fromVertex;
        v = shortestPathA.predecessors[v]
      ) {
        path.push(v);
      }
      path.push(fromVertex);
      let s = path.pop();
      while (!path.isEmpty()) {
        s += ` - ${path.pop()}`;
      }
      console.log("최단 경로 : ", s);
    });
  };

  this.dfs = function (callback) {
    let color = initializeColor();
    vertices.forEach((vertex) => {
      if (color[vertex] === "white") dfsVisit(vertex, callback); // 4
    });

    function dfsVisit(u, callback) {
      color[u] = "gray";
      if (callback) callback(u);
      const neighbors = adjList.get(u);
      neighbors.forEach((neighbor) => {
        if (color[neighbor] === "white") dfsVisit(neighbor, callback);
      });
      color[u] = "black";
    }
  };
  this.DFS = function (callback) {
    //
  };
  function initializeColor() {
    let color = {};
    vertices.forEach((vertex) => {
      color[vertex] = "white";
    });
    return color;
  }
}

function printNode(vertex) {
  console.log("탐색이 끝난 정점 :", vertex);
}

const graph = new Graph();

const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

myVertices.forEach((myVertex) => {
  graph.addVertex(myVertex);
});

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("E", "I");
graph.addEdge("E", "J");
graph.addEdge("E", "K");
graph.addEdge("E", "L");

console.log(graph.toString());

console.log("---bfs---");
// graph.bfs(myVertices[0], printNode);
graph.BFS(myVertices);

console.log("---dfs---");
graph.dfs(printNode);
