class QueueNode {
  constructor(item) {
    this.data = undefined;
    this.next = this.QueueNode(item);
  }

  QueueNode(data) {
    this.data = data;
  }
}

class Queue {
  constructor() {
    this.first = undefined;
    this.last = undefined;
  }

  add(item) {
    let t = new QueueNode(item);
    if (this.last) {
      this.last.next = t;
    }

    this.last = t;

    if (!this.first) {
      this.first = this.last;
    }
  }

  remove() {
    if (!this.first) {
      throw new Error('No such element');
    }

    const data = this.first.data;
    this.first = this.first.next;
    if (!this.first) {
      this.last = undefined;
    }

    return data;
  }

  peek() {
    if (!this.first) {
      throw new Error('No such element');
    }

    return this.first.data;
  }

  isEmpty() {
    return !this.first;
  }

}

const queue = new Queue();
queue.add(2);
queue.add(5);
queue.add(7);

console.log('queue :>> ', queue);
