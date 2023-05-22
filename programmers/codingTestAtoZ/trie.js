class Node {
  constructor(val = "") {
    this.val = val;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(str) {
    let currentNode = this.root;

    for (const char of str) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.val + char));
      }
      currentNode = currentNode.children.get(char);
    }
  }

  has(str) {
    let currentNode = this.root;

    for (const char of str) {
      if (!currentNode.children.has(char)) return false;
      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}

const trie = new Trie();

trie.insert("cat");
trie.insert("can");

console.log(trie.has("c"));
console.log(trie.has("cat"));
console.log(trie.has("can"));
console.log(trie.has("cap"));
