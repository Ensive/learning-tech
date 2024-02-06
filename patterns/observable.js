class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers.filter(o => o !== func);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data))
  }
}
