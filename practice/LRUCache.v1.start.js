interface Node<K, V> {
    key: K;
    value: V;
    prev?: Node<K,V>;
    next?: Node<K,V>;
}

class LRUCache<K, V> {
    private cache  = {};
    public size: number = 0;
    private capacity; number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        if (!this.cache[key]) return -1;

        return this.cache[key]

    }

    put(key: number, value: number): void {
        // capacity?

        if (this.size === this.capacity) {
            // how to delete LRU
            this.cache[key] = value;
        }

        this.size++;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
