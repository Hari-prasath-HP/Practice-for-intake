    class Heapsort{
        constructor(){
            this.data = []
        }

        getparent(i){
            return Math.floor((i-1)/2)
        }
        getleft(i){
            return i*2 +1
        }
        getright(i){
            return 2*i + 2
        }
        swap(i1,i2){
            let temp = this.data[i1]
            this.data[i1] = this.data[i2]
            this.data[i2] = temp;
        }
        push(key){
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
        pop(){
            if(this.data.length == 0) return null;
            let max = this.data[0]
            if(this.data.length === 1){
                this.data.pop()
            }else{
                this.data[0] = this.data.pop()
                this.heapifyDown(0)
            }
            return max;
        }
        heapifyDown(i){
            let largest = i;
            let left = this.getleft(i)
            let right = this.getright(i)
            if(left < this.data.length && this.data[left] > this.data[largest]){
                largest = left;
            }
            if(right < this.data.length && this.data[right] > this.data[largest]){
                largest = right;
            }
            if(largest != i){
                this.swap(i,largest)
                this.heapifyDown(largest)
            }
        }
    }
    function heapsort(arr){
        let heap = new Heapsort()

        for(let num of arr){
            heap.push(num)
        }
        let sorted = []
        while(heap.data.length > 0){
            sorted.push(heap.pop())
        }
        return sorted.reverse()
        }
    let heap = new Heapsort()
    console.log(heap)
    heap.push(45)
    heap.push(56)
    heap.push(78)
    console.log(heap.data.join(','))
    heap.pop()
    console.log(heap.data.join(','))
    let arr = [3,2,5,1,7,9,4]
    console.log(heapsort(arr))