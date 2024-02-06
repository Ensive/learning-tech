class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    } else {
      throw new Error(`vertex with the name ${name} already exist`);
    }
  }

  // directional graph we would do one of the operations
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1].includes(vertex2)) {
      throw new Error(`edge ${vertex2} already exist for vertex: ${vertex1}`);
    } else {
      this.adjacencyList[vertex1].push(vertex2);
    }

    if (this.adjacencyList[vertex2].includes(vertex1)) {
      throw new Error(`edge ${vertex1} already exist for vertex: ${vertex2}`);
    } else {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (edge) => edge !== vertex2,
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (edge) => edge !== vertex1,
    );
  }

  removeVertex(vertex) {
    // remove vertex by key
    // iterate over all vertexes and remove edge
    delete this.adjacencyList[vertex];

    for (const [key, value] of Object.entries(this.adjacencyList)) {
      this.adjacencyList[key] = this.adjacencyList[key].filter(
        (edge) => edge !== vertex,
      );
    }
  }
}

//

const travelUkraine = new Graph();
travelUkraine.addVertex("Lviv");
travelUkraine.addVertex("Kyiv");
travelUkraine.addVertex("Chernivtsi");
travelUkraine.addEdge("Lviv", "Chernivtsi");
travelUkraine.addEdge("Kyiv", "Chernivtsi");
travelUkraine.addEdge("Kyiv", "Lviv");
travelUkraine.removeEdge("Kyiv", "Lviv");
travelUkraine.removeVertex("Lviv");

console.log("travelUkraine :>> ", travelUkraine);
