class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Ll{
    constructor(){
        this.tail = null;
        this.head = null;
        this.size = 0
    }

    prepend(val){
        let node = new Node(val)
        if(this.size == 0){
            this.tail = node;
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }this.size++
    }

    middle(){
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }return slow;
    }

    sort(){
        let swap;
        do{
            swap = false;
            let curr = this.head;
            while(curr.next){
                if(curr.data>curr.next.data){
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
        }this.head = newnode;
    }
}

let ll = new Ll()

ll.prepend(30)
ll.prepend(25)
ll.prepend(15)
ll.prepend(67)
ll.prepend(65)
console.log(JSON.stringify(ll))
console.log(ll.middle())
// ll.sort()
ll.reverse()
console.log(JSON.stringify(ll))