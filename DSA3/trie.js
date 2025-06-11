class Node{
    constructor(){
        this.child = {}
        this.isend = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.child[char]){
                curr.child[char] = new Node()
            }curr = curr.child[char]
        }curr.isend = true;
    }
    search(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.child[char]){
                return false;
            }curr = curr.child[char]
        }return curr.isend
    }

    suggest(word){
        let curr = this.root
        for(let char of word){
            if(!curr.child[char]){
                return []
            }curr = curr.child[char]
        }
        let suggest = []
        let dfs = (node,word) =>{
            if(node.isend){
                suggest.push(word)
            }
            for(let char in node.child){
                dfs(node.child[char],word+char)
            }
        }
        dfs(curr,word)
        return suggest
    }
    longestprefix(word){
        let curr = this.root;
        let prefix = ""
        for(let char of word){
            if(curr.child[char]){
                prefix += char;
                curr = curr.child[char]
            }else {
                break;
            }
        }return prefix
    }
    count(word){
        let curr = this.root
        let count = 0
        for(let char of word){
            if(!curr.child[char]) break;
            curr = curr.child[char]
            if(curr.isend){
                count++
            }
        }return count
    }
    commonprefix(){
        let curr = this.root
        let prefix = ''
        while(true){
            let keys = Object.keys(curr.child)
            if(keys.length === 1 && !curr.isend){
                prefix += keys[0]
                curr = curr.child[keys[0]]
            }else break;
        }return prefix
    }
}   

let trie = new Trie()
trie.insert("cat")
trie.insert("cap")
console.log(trie.search("cat"))
console.log(trie.suggest("c"))
console.log(trie.longestprefix("capple"))
console.log(trie.count("cattle"))
console.log(trie.commonprefix())