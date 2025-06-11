class Heapsort{
    constructor(){
        this.data = []
    }
    getParent(i){return Math.floor((i-1)/2)}
    getleft(i){return 2*i +1}
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
        while(current > 0 &&  this.data[current] < this.data[this.getParent(current)]){
            this.swap(current,this.getParent(current))
            current = this.getParent(current)
        }
    }
    remove(i){
        if(this.data.length == 0)return null;
        let max = this.data[0]
        if(this.data.length === 1){
            this.data.pop()
        }else{
            this.data[0] = this.data.pop()
            this.heapifyDown(0)
        }return max
    }
    heapifyDown(i){
        let largest = i
        let left = this.getleft(i)
        let right = this.getright(i)
        if(left<this.data.length && this.data[left] < this.data[largest]){
            largest = left;
        }
        if(right<this.data.length && this.data[right] < this.data[largest]){
            largest = right;
        }
        if(largest != i){
            this.swap(i,largest)
            this.heapifyDown(largest)
        }
    }
}
function sorted(arr){
    let heap = new Heapsort()
    for(let num of arr){
        heap.insert(num)
    }
    let sorted = []
    while(heap.data.length>0){
        sorted.push(heap.remove())
    }
    return sorted;
}
let arr = [2,5,3,6,1,7,4]
console.log(sorted(arr))