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
            if(!node || count >=k){
                return null
            }
            reverse(node.right)
            count ++
            if(count == k){
                result = node.value
                return
            }
            reverse(node.left)
        }
        reverse(this.root)
        return result
    }
    countleft(root = this.root){
        if(!root)return 0
        let count = 0
        if(root.left){
            count+=1
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
        this.root = this.deletenode(this.root,value)
    }
    deletenode(root,value){
        if(!root)return null
        if(value<root.value){
            root.left = this.deletenode(root.left,value)
        }else if(value > root.value){
            root.right = this.deletenode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left)return root.right
            if(!root.right)return root.left
            let minnode = this.findmin(root.right)
            root.value = minnode.value
            root.right = this.deletenode(root.right,minnode.value)
        }return root
    }   
}