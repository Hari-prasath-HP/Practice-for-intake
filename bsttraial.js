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
        }else{
            this.insertNode(this.root,node)
        }
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
    findlargest(k){
        let count = 0
        let result = null
        function reverse(node){
            if(!node || count>k)return null
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
    height(node = this.root){
        if(root = null){
            return -1
        }
        let left = this.height(node.left)
        let right = this.height(node.right)
        return 1 + Math.max(left,right)
    }
    left(root){
        if(!root)return 0
        let count = 0
        if(root.left){
            count += 1
            count += this.left(root.left)
        }
        count += this.right(root.right)
        return count
    }
}
