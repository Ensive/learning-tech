/**
 * @param {Record<string, Array<string>} graph The adjacency list representing the graph.
 * @param {string} source The source node to start traversal from. It has to exist as a node in the graph.
 * @return {Array<string>} A DFS-traversed order of nodes.
 */
export default function depthFirstSearch(graph, source) {
  if (!graph[source]) return [];
  if (graph[source].length === 0) return [source];

  let order = [];
  let seen = new Set();

  function dfs(node) {
    if (seen.has(node)) return;
    seen.add(node);
    order.push(node);

    graph[node].forEach((neighbor) => {
      if (!seen.has(neighbor)) {
        dfs(neighbor);
      }
    });
  }

  dfs(source);

  return order;
}
