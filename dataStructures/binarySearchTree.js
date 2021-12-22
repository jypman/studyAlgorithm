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
    // 노드 최솟값
    this.min = function () {
        if(root !== null){
            let node = {...root}
            while (node && node.left !== null) node = node.left
            return node.key;
        }
        return null;
    }
    // 노드 최댓값
    this.max = function () {
        if(root !== null){
            let node = {...root}
            while (node && node.right !== null) node = node.right
            return node.key;
        }
        return null;
    }
    // 특정 값 찾기
    this.search = function (key) {
        return searchNode(root, key)
    }
    // 노드 삭제
    this.remove = function (key) {
        root = removeNode(root, key)
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
    function searchNode(node, key) {
        if(node === null){
            return false
        }
        if(key < node.key){
            return searchNode(node.left, key)
        } else if(key > node.key){
            return searchNode(node.right, key)
        } else {
            return true
        }
    }
    function removeNode(node, key) {
        if(node === null){
            return null
        }

        // 찾는 값이 방문한 노드의 값보다 적으면 죄측 아니면 우측으로 이동
        if(key < node.key){
            node.left = removeNode(node.left, key)
            return node
        } else if(key > node.key){
            node.right = removeNode(node.right, key)
            return node
        }

        // 찾는 값을 갖는 노드에 방문했을 때 리프 노드인 경우
        // 리프노드를 제거해준다.
        if(node.left === null && node.right === null){
            node = null
            return node;
        }

        // 찾는 값을 갖는 노드에 방문했을 때 한쪽에만 자식 노드가 있는 경우
        // 조상 노드가 자손 노드를 가리키면 된다.
        if(node.left === null){
            node = node.right
            return node
        }
        else if(node.right === null){
            node = node.left
            return node
        }

        // 찾는 값을 갖는 노드에 방문했을 때 양쪽 모두 자식 노드가 있는 경우
        // 노드 기준 오른쪽 서브트리에서 최솟값을 현재 노드의 값으로 바꿔준다.
        // 해당 서브트리에서 최솟값을 갖는 노드를 삭제해준다.
        node.key = findMinNode(node.right).key
        node.right = removeNode(node.right, node.key)
        return node
    }
    function findMinNode(NODE) {
        // 최솟값을 갖는 노드 반환
        if(NODE !== null){
            let node = {...NODE}
            while (node && node.left !== null) node = node.left
            return node;
        }
        return null;
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

console.log('노드 최솟값 :', tree.min())
console.log('노드 최댓값 :', tree.max())

console.log('6을 찾았는가? :', tree.search(6))
console.log('99를 찾았는가? :', tree.search(99))

tree.remove(15)
console.log('* 노드 삭제 후 중위순회')
tree.inOrderTraverse(printNode)