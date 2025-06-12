class Graph{
    constructor(){
        this.adjacencylist = {}
    }
    addvertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex] = new Set()
        }
    }
    addedge(vertex1,vertex2){
        this.addvertex(vertex1)
        this.addvertex(vertex2)
        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
    }
    hasedge(vertex1,vertex2){
        return(
            this.adjacencylist[vertex1].has(vertex2) && 
            this.adjacencylist[vertex2].has(vertex1)
        )
    }
}

let graph = new Graph()
graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addedge("A","B")
graph.addedge("B","C")
console.log(graph.hasedge("A","B"))