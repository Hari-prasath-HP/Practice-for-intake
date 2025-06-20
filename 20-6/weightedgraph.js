class Weightedgraph{
    constructor(){
        this.adjacencylist = new Map()
    }
    addvertex(vertex){
        if(!this.adjacencylist.has(vertex)){
            this.adjacencylist.set(vertex,new Map())
        }
    }
    addEdge(vertex1,vertex2,weight=1){
        this.addvertex(vertex1)
        this.addvertex(vertex2)
        this.adjacencylist.get(vertex1).set(vertex2,weight)
        this.adjacencylist.get(vertex2).set(vertex1,weight)
    }
    display(){
        for(let [vertex,edge] of this.adjacencylist){
            console.log(vertex,'->',[...edge.entries()])
        }
    }
}
let graph = new Weightedgraph()
graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addEdge("A","B",78)
graph.addEdge("B","C",35)
graph.display()