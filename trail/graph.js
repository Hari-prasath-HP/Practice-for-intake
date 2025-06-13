class Graph{
    constructor(){
        this.adjacencylist = {}
    }
    insert(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex] = new Set()
        }
    }
    addvertex(vertex1,vertex2){
        this.adjacencylist[vertex1]
        this.adjacencylist[vertex2]
        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencylist[vertex1].has(vertex2)&&
            this.adjacencylist[vertex2].has(vertex1)
        )
    }
}
let graph = new Graph()
graph.insert("A")
graph.insert("B")
graph.insert("C")
graph.addvertex("A","B")
graph.addvertex("B","C")
console.log(graph.hasEdge("C","B"))