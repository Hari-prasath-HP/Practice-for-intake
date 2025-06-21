class Graph{
    constructor(){
        this.adjacencylist = {}
    }
    addvertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        this.addvertex(vertex1)
        this.addvertex(vertex2)
        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjacencylist[vertex1].has(vertex2) &&
            this.adjacencylist[vertex2].has(vertex1)
        )
    }
    removeredge(vertex1,vertex2){
        this.adjacencylist[vertex1].delete(vertex2)
        this.adjacencylist[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencylist[vertex])return
        for(let adjacenct of this.adjacencylist[vertex]){
            this.removeredge(adjacenct,vertex)
        }delete this.adjacencylist[vertex]
    }
    reverse(){
        let reverse = new Graph()
        for(let vertex in this.adjacencylist){
            for(let neighbor of this.adjacencylist[vertex]){
                reverse.addEdge(neighbor,vertex)
            }
        }return reverse
    }
    display(){
        for(let vertex in this.adjacencylist){
            console.log(vertex, '->', [...this.adjacencylist[vertex]])
        }
    }
}
let graph = new Graph()
graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.display()
let a = graph.reverse()
a.display()