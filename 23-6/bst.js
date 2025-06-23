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
            if(root.left == null){
                root.left = node
            }else this.insertNode(root.left,node)
        }else{
            if(root.right == null){
                root.right = node
            }else this.insertNode(root.right,node)
        }
    }
    // bfs(){
    //     let res = []
    //     let queue = []
    //     if(this.root)queue.push(this.root)
    //     while(queue.length){
    //     let levelsize = queue.length
    //     let level = []
    //     for(let i=0;i<levelsize;i++){
    //         let node = queue.shift()
    //         level.push(node.value)
    //         if(node.left) queue.push(node.left)
    //         if(node.right)queue.push(node.right)
    //         }res.push(level)
    //     }return res
    // }
    bfs(){
        let result = []
        let queue = []
        if(this.root) queue.push(this.root)
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
}

let bst = new Bst()
bst.insert(87)
bst.insert(10)
bst.insert(92)
bst.insert(79)
console.log(JSON.stringify(bst))
console.log(bst.bfs())