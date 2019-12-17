class Node {
  constructor(d) {
    this.next = null; //
    this.value = d;
  }

  deleteNode(d) {
    let node = this;

    if (node.value === d) {
      return node.next;
    }

    while (node.next !== null) {
      if (node.next.value === d) {
        node.next = node.next.next;
        return node;
      }

      node = node.next;
    }

    return node;
  }

  appendToTail(d) {
    const end = new Node(d);
    let node = this;

    while (node.next !== null) {
      node = node.next;
    }

    node.next = end;
  }
}

const node = new Node(1);
node.appendToTail(2);
node.appendToTail(3);
// node.appendToTail(4);
node.appendToTail(4);
// node.appendToTail(5);
node.appendToTail(5);
// node.appendToTail(6);
node.appendToTail(6);
// node.appendToTail(7);
node.appendToTail(7);
node.deleteNode(1);

console.log('node :', node);
console.log('node :', JSON.stringify(node, null, 2));

// const newLinkedList = Node.appendToTail(1);
// console.log('newLinkedList :', newLinkedList);
