/**
 * @param {Record<string, Array<string>} graph The adjacency list representing the graph.
 * @param {string} source The source node to start traversal from. It has to exist as a node in the graph.
 * @return {Array<string>} A DFS-traversed order of nodes.
 */
export default function depthFirstSearch(graph, source) {
  if (Object.keys(graph).length === 0) return [];

  const toBeVisited = [source];
  const visited = new Set();

  while (toBeVisited.length > 0) {
    const node = toBeVisited.pop();
    visited.add(node);

    const neighbors = graph[node];

    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];

      if (!visited.has(neighbor)) {
        toBeVisited.push(neighbor);
      }
    }
  }

  return Array.from(visited);
}
