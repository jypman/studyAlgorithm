function BinarySearchTree() {
    let root = null;

    // 새로운 노드 추가(key === 노드의 값)
    this.insert = function (key) {
        const newNode = new Node(key)
        if(root === null) root = newNode
        else insertNode(root, newNode)
    }
    // 중위순회
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback)
    }
    // 전위순회
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback)
    }
    // 후위순회
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback)
    }

    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    function insertNode(node, newNode) {
        // 좌측 노드 검색
        if(newNode.key < node.key) {
            if(node.left === null) node.left = newNode
            // 재귀를 통해 하위 레벨의 좌측 노드 탐색
            else insertNode(node.left, newNode)
        }
        // 우측 노드 검색
        else {
            if(node.right === null) node.right = newNode
            // 재귀를 통해 하위 레벨의 우측 노드 탐색
            else insertNode(node.right, newNode)
        }
    }
    function inOrderTraverseNode(node, callback) {
        if(node !== null){
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }
    function preOrderTraverseNode(node, callback) {
        if(node !== null){
            callback(node.key)
            preOrderTraverseNode(node.left, callback)
            preOrderTraverseNode(node.right, callback)
        }
    }
    function postOrderTraverseNode(node, callback) {
        if(node !== null){
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
}

function printNode(value) {
    console.log('노드의 값 :', value)
}

const tree = new BinarySearchTree()

tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

console.log('* 중위순회')
tree.inOrderTraverse(printNode)
console.log('* 전위순회')
tree.preOrderTraverse(printNode)
console.log('* 후위순회')
tree.postOrderTraverse(printNode)