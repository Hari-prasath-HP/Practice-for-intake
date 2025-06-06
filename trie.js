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
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new Node()
            }curr = curr.children[char]
        }curr.isend = true;
    }
    search(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                return false;
            }curr = curr.children[char]
        }return curr.isend
    }

    suggest(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.children[char]){
                return []
            }curr = curr.children[char]
        }
        let suggestions = []
        let dfs = (node,word)=>{
            if(node.isend){
                suggestions.push(word)
            }
            for(let char in node.children){
                dfs(node.children[char],word+char)
            }
        }
        dfs(curr,word)
        return suggestions
    }
}

let trie = new Trie()
trie.insert("cat")
trie.insert("cattle")
trie.insert("cap")
trie.insert("car")
console.log(trie.search("cat"))
console.log(trie.suggest("c"))