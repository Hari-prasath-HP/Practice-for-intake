class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Ll{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    append(val){
        let node = new Node(val)
        if(this.size == 0){
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size ++
    }

    middle(){
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next
        }return slow;
    }

    deletemiddle(){
        let slow = this.head;
        let fast = this.head;
        let prev = null;
        while(fast && fast.next){
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }
        prev.next = slow.next;
        this.size--
    }

    sort(){
        let swap;
        do{
            swap = false;
            let curr = this.head;
            while(curr.next){
                if(curr.data > curr.next.data){
                    let temp = curr.data;
                    curr.data = curr.next.data;
                    curr.next.data = temp;
                    swap = true;
                }curr = curr.next;
            }
        }while(swap)
    }

    reverse(){
        let newnode = null;
        let curr = this.head;
        this.tail = curr;
        while(curr){
            let nextnode = curr.next;
            curr.next = newnode;
            newnode = curr;
            curr = nextnode;
        }this.head = newnode
    }

    removeduplicate(){
        let curr = this.head;
        let seen = new Set()
        let prev = null;
        while(curr){
            if(seen.has(curr.data)){
                prev.next = curr.next;
                this.size--
            }else{
                seen.add(curr.data)
                prev = curr;
            }curr = curr.next;
        }this.tail = prev
    }
}

let ll = new Ll()
ll.append(25)
ll.append(35)
ll.append(15)
ll.append(25)
ll.append(8)
console.log(JSON.stringify(ll))
console.log(ll.middle())
// ll.deletemiddle()
// ll.sort()
// ll.reverse()
ll.removeduplicate()
console.log(JSON.stringify(ll))