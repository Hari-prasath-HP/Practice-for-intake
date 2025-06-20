class Heap{
    constructor(){
        this.data = []
    }
    getparent(i){return Math.floor((i-1)/2)}
    getleft(i){return i*2+1}
    getright(i){return i*2+2}
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
        while(current>0 && this.data[current] > this.data[this.getparent(current)]){
            this.swap(current,this.getparent(current))
            current = this.getparent(current)
        }
    }
    remove(){
        if(this.data.length==0)return null
        let max = this.data[0]
        if(this.data.length === 1){
            this.data.pop()
        }else{
            this.data[0] = this.data.pop()
            this.heapifyDown(0)
        }return max
    }
    heapifyDown(i){
        let largest= i
        let left = this.getleft(i)
        let right = this.getright(i)
        if(left<this.data.length && this.data[left] > this.data[largest]){
            largest = left
        }
        if(right<this.data.length && this.data[right] > this.data[largest]){
            largest = right
        }
        if(largest!=i){
            this.swap(i,largest)
            this.heapifyDown(largest)
        }
    }
    minheapconvert(){
        let lastparent = Math.floor((this.data.length-2)/2)
        for(let i=lastparent;i>=0;i--){
            this.minheapifyDown(i)
        }
    }
    minheapifyDown(i){
        let smallest= i
        let left = this.getleft(i)
        let right = this.getright(i)
        if(left<this.data.length && this.data[left] < this.data[smallest]){
            smallest = left
        }
        if(right<this.data.length && this.data[right] < this.data[smallest]){
            smallest = right
        }
        if(smallest!=i){
            this.swap(i,smallest)
            this.minheapifyDown(smallest)
        }
    }
}
function sorting(arr){
    let heap = new Heap()
    for(let nums of arr){
        heap.insert(nums)
    }
    let sorted = []
    while(heap.data.length){
        sorted.push(heap.remove())
    }
    return sorted
}
let heap = new Heap()
heap.insert(87)
heap.insert(32)
heap.insert(82)
heap.insert(59)
heap.insert(18)
heap.insert(98)
heap.insert(10)
console.log(sorting(heap.data))