class Node{
    constructor(){
        this.children = {}
        this.isend = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new Node()
            }curr = curr.children[char]
        }curr.isend = true
    }
    search(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                return false
            }curr = curr.children[char]
        }return curr.isend
    }
    suggest(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                return []
            }curr = curr.children[char]
        }
        let suggest = []
        let dfs = (node,word) =>{
            if(node.isend){
                suggest.push(word)
            }
            for(let char in node.children){
                dfs(node.children[char],word+char)
            }
        }
        dfs(curr,word)
        return suggest
    }
    longestprefix(word){
        let curr = this.root
        let prefix = ''
        for(let char of word){
            if(curr.children[char]){
                prefix += char
                curr = curr.children[char]
            }else break;
        }return prefix
    }
    commonprefix(){
        let curr = this.root;
        let prefix = ""
        while(true){
            let keys = Object.keys(curr.children)
            if(keys.length === 1 && !curr.isend){
                prefix += keys[0]
                curr = curr.children[keys[0]]
            }else break;
        }return prefix
    }
}

let trie = new Trie()
trie.insert("car")
trie.insert("cartoon")
trie.insert("carrom")
trie.insert("cart")
console.log(trie.search("cat"))
console.log(trie.suggest("c"))
console.log(trie.longestprefix("cartesian"))
console.log(trie.commonprefix())