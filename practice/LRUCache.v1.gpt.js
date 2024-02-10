interface Node<K, V> {
  key: K;
  value: V;
  prev?: Node<K, V>;
  next?: Node<K, V>;
}

class LRUCache<K, V> {
  private size: number = 0;
  private capacity: number;
  private cache: Map<K, Node<K, V>> = new Map();
  private head: Node<K, V>;
  private tail: Node<K, V>;

  constructor(capacity: number) {
      this.capacity = capacity;
      this.head = this.initNode(undefined, undefined);
      this.tail = this.initNode(undefined, undefined);
      this.head.next = this.tail;
      this.tail.prev = this.head;
  }

  get(key: K): V | -1 {
      const node = this.cache.get(key);
      if (!node) return -1;

      this.moveToHead(node);
      return node.value;
  }

  put(key: K, value: V): void {
      const node = this.cache.get(key);

      if (node) {
          node.value = value;
          this.moveToHead(node);
      } else {
          const newNode = this.initNode(key, value);
          this.cache.set(key, newNode);
          this.addNode(newNode);
          this.size++;

          if (this.size > this.capacity) {
              const tail = this.popTail();
              this.cache.delete(tail.key);
              this.size--;
          }
      }
  }

  private initNode(key: K, value: V): Node<K, V> {
      return {
          key,
          value,
      };
  }

  private addNode(node: Node<K, V>): void {
      node.prev = this.head;
      node.next = this.head.next;

      this.head.next.prev = node;
      this.head.next = node;
  }

  private removeNode(node: Node<K, V>): void {
      const prev = node.prev;
      const next = node.next;

      prev.next = next;
      next.prev = prev;
  }

  private moveToHead(node: Node<K, V>): void {
      this.removeNode(node);
      this.addNode(node);
  }

  private popTail(): Node<K, V> {
      const res = this.tail.prev;
      this.removeNode(res);
      return res;
  }
}
