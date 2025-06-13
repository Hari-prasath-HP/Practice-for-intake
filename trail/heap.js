class Heap{
    constructor(){
        this.data = []
    }
    getparent(i){return Math.floor((i-1)/2)}
    getleft(i){return 2*i + 1}
    getright(i){return 2*i + 2}
    swap(i1,i2){
        let temp = this.data[i1]
        this.data[i1] = this.data[i2]
        this.data[i2] = temp
    }
    insert(key){
        this.data[this.data.length] = key
        this.heapifyUp()
    }
    heapifyUp(){
        let current = this.data.length-1
        while(current > 0 && this.data[current] > this.data[this.getparent(current)]){
            this.swap(current,this.getparent(current))
            current = this.getparent(current)
        }
    }
    
}