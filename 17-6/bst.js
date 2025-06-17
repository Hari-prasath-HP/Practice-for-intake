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
        return this.root === null
    }
    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else this.insertNode(this.root,node)
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else this.insertNode(root.left,node)
        }else{
            if(root.right === null){
                root.right = node
            }else this.insertNode(root.right,node)
        }
    }
    largest(k){
        let count = 0
        let result = null
        function reverse(node){
            if(!node || count >= k){
                return null
            }
            reverse(node.right)
            count++
            if(count == k){
                result = node.value
                return
            }
            reverse(node.left)
        }reverse(this.root)
        return result 
    }
    countleft(root = this.root){
        if(!root){
            return 0
        }
        let count = 0
        if(root.left){
            count += 1
            count+=this.countleft(root.left)
        }
        count+=this.countleft(root.right)
        return count 
    }
    height(node){
        if(!node)return -1
        let left = this.height(node.left)
        let right = this.height(node.right)
        return 1 + Math.max(left,right)
    }
    delete(value){
        this.root = this.deletevalue(this.root,value)
    }
    deletevalue(root,value){
        if(value<root.value){
            root.left = this.deletevalue(root.left,value)
        }else if(value > root.value){
            root.right = this.deletevalue(root.right,value)
        }else{
            if(!root.left,!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            let minnode = this.findmin(root.right)
            root.value = minnode.value
            root.right = this.deletevalue(root.right,minnode.value)
        }return root
    }
    findmin(node){
        if(node.left){
            node = node.left
        }return node
    }
    isBst(node,min=-Infinity,max=Infinity){
        if(!node)return true
        if(node.value <= min || node.value >= max)return false
        return this.isBst(node.left,min,node.value) &&
        this.isBst(node.right,node.value,max)
    }
}
let bst = new Bst()
bst.insert(56)
bst.insert(34)
bst.insert(67)
bst.insert(23)
bst.insert(87)
console.log(bst.largest(3))
console.log(bst.countleft())
console.log(bst.height(bst.root))
bst.delete(56)
console.log(bst.largest(3))
console.log(bst.isBst(bst.root))