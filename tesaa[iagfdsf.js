class Node{
    constructor(){
        this.children = {}
        this.isend = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
                current.children[char] = new Node()
            }current = current.children[char]
        }current.isend = true
    }
    search(word){
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
                return false
            }current = current.children[char]
        }return current.isend
    }
    suggest(word){
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
                return []
            }current = current.children[char]
        }
        let suggest = []
        let dfs = (node,word)=>{
            if(node.isend){
                suggest.push(word)
            }
            for(let char in node.children){
                dfs(node.children[char],word+char)
            }
        }
        dfs(current,word)
        return suggest
    }
}

let trie = new Trie()
trie.insert("cat")
trie.insert("cap")
console.log(trie.search("catt"))
console.log(trie.suggest("c"))