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
        let suggestion = []
        let dfs = (node,word) =>{
            if(node.isend){
                suggestion.push(word)
            }
            for(let char in node.children){
                dfs(node.children[char],word+char)
            }
        }
        dfs(current,word)
        return suggestion
    }
    longestprefix(word){
        let curr = this.root
        let prefix = ''
        for(let char of word){
            if(curr.children[char]){
                prefix+=char
                curr = curr.children[char]
            }else break
        }return prefix
    }
    commonprefix(){
        let curr = this.root
        let prefix = ''
        while(true){
            let keys = Object.keys(curr.children)
            if(keys.length == 1 && !curr.isend){
                prefix+=keys[0]
                curr = curr.children[keys[0]]
            }else break
        }return prefix
    }
}

let trie = new Trie()
trie.insert("cat")
trie.insert("cap")
trie.insert("cart")
console.log(trie.search("cat"))
console.log(trie.suggest("c"))
console.log(trie.longestprefix("cartle"))
console.log(trie.commonprefix())