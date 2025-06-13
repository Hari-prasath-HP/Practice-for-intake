class Node{
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class Bst{
    constructor(){
        this.root = null;
    }
    isempty(){
        return this.root == null;
    }
    insert(value){
        let node = new Node(value)
        if(this.isempty()){
            this.root = node;
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
    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value == value){
                return true;
            }else if(value < root.value){
                return this.search(root.left,value)
            }else return this.search(root.right,value)
        }
    }
    left(root){
        if(!root)return 0
        let count = 0
        if(root.left){
            count+=1
            count+=this.left(root.left)
        }
        count+=this.left(root.right)
        return count
    }
    findlargest(k){
        let count = 0
        let result = null;
        function reverse(node){
            if(!node || count > k)return 
            reverse(node.right)
            count++
            if(count === k){
                result = node.value
                return;
            }
            reverse(node.left)
        }reverse(this.root)
        return result
    }
    height(node = this.root){
        if(node === null){
            return -1
        }
        let left = this.height(node.left)
        let right = this.height(node.right)
        return 1 + Math.max(left,right)
    }
}

let bst = new Bst()
bst.insert(45)
bst.insert(14)
bst.insert(57)
bst.insert(56)
bst.insert(46)
bst.insert(53)
console.log(bst.search(bst.root,56))
console.log(bst.left(bst.root))
console.log(bst.findlargest(3))
console.log(bst.height())
