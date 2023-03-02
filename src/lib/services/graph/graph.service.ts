import Graph from "graphology";

class GraphService {
    getData() {
        const graph = new Graph();
        
        //here I create some nodes
        graph.addNode("John", {
            x: 0,
            y: 10,
            size: 15,
            label: "John",
            color: "blue",
        });
        graph.addNode("Mary", {
            x: 10,
            y: 0,
            size: 10,
            label: "Mary",
            color: "green",
        });
        graph.addNode("Thomas", {
            x: 7,
            y: 9,
            size: 20,
            label: "Thomas",
            color: "red",
        });
        graph.addNode("Hannah", {
            x: -7,
            y: -6,
            size: 25,
            label: "Hannah",
            color: "teal",
        });

        // here there are different relations between nodes.
        graph.addEdge("John", "Mary");
        graph.addEdge("John", "Thomas");
        graph.addEdge("John", "Hannah");
        graph.addEdge("Hannah", "Thomas");
        graph.addEdge("Hannah", "Mary");


        return graph;
    }
}

export default new GraphService();