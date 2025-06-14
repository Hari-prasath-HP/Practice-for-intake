class Heap{
    constructor(){
        this.data = []
    }
    getparent(i){return Math.floor((i-1)/2)}
    getleft(i){return 2*i+1}
    getright(i){return 2*i+2}
    swap(i1,i2){
        let temp = this.data[i1]
        this.data[i1] = this.data[i2]
        this.data[i2] = temp
    }
    insert(key){
        this.data.length = key
        this.heapifyUp()
    }
    heapifyUp(){
        let curr = this.data[this.data.length-1]
        while(curr>0&&this.data[curr] > this.data[this.getparent(curr)]){
            this.swap(curr,this.getparent(curr))
            curr = this.getparent(curr)
        }
    }
    remove(){
        if(this.data.length == 0)return null
        let max = this.data[0]
        if(this.data.length == 1){
            this.data.pop()
        }else{
            this.data[0] = this.data.pop()
            this.heapifyDown(0)
        }return max
    }
    heapifyDown(i){
        let largest = i
        
    }
}