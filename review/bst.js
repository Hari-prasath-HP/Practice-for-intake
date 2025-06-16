class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Bst{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else this.insertNode(this.root,node)
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left == null){
                root.left = node
            }else this.insertNode(root.left,node)
        }else{
            if(root.right == null){
                root.right = node
            }else this.insertNode(root.right,node)
        }
    }
    countleft(root=this.root,isleft = false){
        if(!root)return 0
        let count = 0
        if(isleft==true){
            count +=1
        }
        count+=this.countleft(root.left,true)
        count += this.countleft(root.right,false)
        return count
    }
    largest(k){
        let count = 0
        let result = null
        function reverse(node){
            if(!node || count > k){
                return null
            }
            reverse(node.right)
            count ++
            if(count == k){
                result = node.value
                return
            }
            reverse(node.left)
        }reverse(this.root)
        return result
    }
}
let bst = new Bst()
bst.insert(36)
bst.insert(67)
bst.insert(45)
bst.insert(12)
bst.insert(8)
console.log(bst.countleft())
console.log(bst.largest(5))
