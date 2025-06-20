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
    hasEdge(vertex1,vertex2){
        return(
            this.adjacencylist[vertex1].has(vertex2)&&
            this.adjacencylist[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjacencylist[vertex1].delete(vertex2)
        this.adjacencylist[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencylist[vertex])return
        for(let adjacent of this.adjacencylist[vertex]){
            this.removeEdge(vertex,adjacent)
        }delete this.adjacencylist[vertex]
    }
}