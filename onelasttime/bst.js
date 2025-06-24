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
    bfs(){
        let result = []
        let queue = []
        if(this.root)queue.push(this.root)
        while(queue.length){
            let levelsize = queue.length
            let level = []
            for(let i=0;i<levelsize;i++){
                let node = queue.shift()
                level.push(node.value)
                if(node.left)queue.push(node.left)
                if(node.right)queue.push(node.right)
            }result.push(level)
        }return result
    }
    dfs(){
        let result = []
        let stack = []
        if(this.root)stack.push(this.root)
        while(stack.length){
            let node = stack.pop()
            result.push(node.value)
            if(node.right)stack.push(node.right)
            if(node.left)stack.push(node.left)
        }return result
    }
    isBalanced(root = this.root){
        let check = (node) =>{
            if(!node)return 0
            let left = check(node.left)
            if(left === -1)return -1
            let right = check(node.right)
            if(right === -1)return -1
            if(Math.abs(left-right)>1)return -1
            return 1 + Math.max(left,right)
        }
        return check(root) !== -1
    }
    findDuplicates(){
        let map = new Map()
        function inorder(node){
            if(!node)return
            inorder(node.left)
            map.set(node.value,(map.get(node.value)|| 0)+1)
            inorder(node.right)
        }
        inorder(this.root)
        let duplicates = []
        for(let [key,value] of map.entries()){
            if(value > 1){
                duplicates.push(key)
            }
        }return duplicates
    }
}
let bst = new Bst()
bst.insert(38)
bst.insert(29)
bst.insert(19)
bst.insert(48)
bst.insert(94)
console.log(bst.bfs())
console.log(bst.dfs())