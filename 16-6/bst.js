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
    countLeft(root= this.root){
        if(!root){
            return 0
        }
        let count = 0
        if(root.left){
            count+=1
            count+=this.countLeft(root.left)
        }
        count+=this.countLeft(root.right)
        return count
    }
    height(node){
        if(!node)return -1
        let left = this.height(node.left)
        let right = this.height(node.right)
        return 1 + Math.max(left,right)
    }
    largest(k){
        let count = 0
        let result = null
        function reverse(node){
            if(!node || count > k){
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
    isBst(node,min=-Infinity,max = Infinity){
        if(!node)return true
        if(node.value<=min || node.value>=max)return false
        return this.isBst(node.left,min,node.value) &&
        this.isBst(node.right,node.value,max)
    }
    delete(value){
        this.root = this.deletevalue(this.root,value)
    }
    deletevalue(root,value){
        if(!root)return null
        if(value < root.value){
            root.left = this.deletevalue(root.left,value)
        }else if(value > root.value){
            root.right = this.deletevalue(root.right,value)
        }else{
            if(!root.right && !root.left){
                return null
            }
            if(!root.left)return root.right
            if(!root.right) return root.left
            let minnode = this.findmin(root.right)
            root.value = minnode.value
            root.right = this.deletevalue(root.right,minnode.value)
        }return root
    }
    findmin(node){
        while(node.left){
            node = node.left
        }return node
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
    preorder(root){
        if(root){
            console.log(root.value)
            this.inorder(root.left)
            this.inorder(root.right)
        }
    }
    postorder(root){
        if(root){
            this.inorder(root.left)
            this.inorder(root.right)
            console.log(root.value)
        }
    }
}

let bst = new Bst()
bst.insert(45)
bst.insert(27)
bst.insert(67)
bst.insert(12)
bst.insert(65)
console.log(bst.largest(4))
console.log(JSON.stringify(bst))
bst.delete(27)
console.log(JSON.stringify(bst))
console.log(bst.countleft())
console.log(bst.height(bst.root))
console.log(bst.largest(3))
console.log(bst.isBst(bst.root))

