class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class Bst{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
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
                root.right = node;
            }else this.insertNode(root.right,node)
        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value==value){
                return true
            }else if(root.value<value){
                return this.search(root.left,value)
            }else {
                return this.search(root.right,value)
            }
        }
    }
    preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }
    countleft(root){
        if(!root) return 0
        let count = 0
        if(root.left){
            count+=1
            count += this.countleft(root.left)
        }
        count+=this.countleft(root.right)
        return count
    }
}

let bst = new Bst()
bst.insert(25)
bst.insert(18)
bst.insert(45)
bst.insert(14)
bst.insert(12)
bst.insert(7)
console.log(bst.search(bst.root,25))
// bst.preorder(bst.root)
// bst.inorder(bst.root)
// bst.postorder(bst.root)
console.log(bst.countleft(bst.root))