class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
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
            this.root = node;
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left == null){
                root.left = node;
            }else this.insertNode(root.left,node)
        }else{
            if(root.right == null){
                root.right = node;
            }else this.insertNode(root.right,node)
        }
    }

    search(root,value){
        if(!root){
            return false;   
        }else{
            if(root.value === value){
                return true;
            }else if(value < root.value){
                return this.search(root.left,value)
            }else {
                return this.search(root.right,value)
            }
        }
    }

    delete(value){
        this.root = this.deletenode(this.root,value)
    }

    deletenode(root,value){
        if(!root) return null
        if(value < root.value){
            root.left = this.deletenode(root.left,value)
        }else if(value > root.value){
            root.right = this.deletenode(root.right,value)
        }else {
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left) return root.right;
            if(!root.right) return root.left;
            let minnode = this.minnode(root.right)
            root.value = minnode.value;
            root.right = this.deletenode(root.right,minnode.value)
        }return root
    }

    minnode(node){
        while(node.left){
            node = node.left;
        }return node;
    }
    findlargest(k){
        let count = 0
        let result = null
        function reverse(node){
            if(!node || count > k){
                return null
            }
            reverse(node.right)
            count++
            if(count==k){
                result = node.value
                return
            }
            reverse(node.left)
        }
        reverse(this.root)
        return result
    }
    height(node){
        if(node == null){
            return -1
        }
        let left = this.height(node.left)
        let right = this.height(node.right)
        return 1 + Math.max(left,right)
    }
    left(root){
        if(!root) return 0
        let count = 0
        if(root.left){
            count+=1
            count+=this.left(root.left)
        }
        count+=this.left(root.right)
        return count
    }
    isBst(node,min = -Infinity,max = Infinity){
        if(!node) return true
        if(node.value <= min || node.value >= max) return false
        return this.isBst(node.left,min,node.value) &&
        this.isBst(node.right,node.value,max)
    }
}

let bst = new Bst()

bst.insert(45)
bst.insert(25)
bst.insert(55)
console.log(bst.search(bst.root,25))
bst.delete(25)
console.log(bst.search(bst.root,25))
console.log(bst.isBst(bst.root))