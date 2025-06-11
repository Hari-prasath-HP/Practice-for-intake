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
                curr.children[char]= new Node()
            }curr = curr.children[char]
        }curr.isend = true;
    }
    search(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.children[char]){
                return false;
            }curr = curr.children[char]
        }return curr.isend
    }

    suggest(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                return []
            }curr = curr.children[char];
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
        return suggestions;
    }

    longestprefix(word){
        let curr = this.root;
        let currchar = ""
        let res = ""
        for(let char of word){
            if(!curr.children[char]){
                break;
            }
            curr = curr.children[char]
            currchar += char;
            if(curr.isend){
                res = currchar
            }
        }
        return res;
    }
}

let trie = new Trie()

trie.insert("cat")
trie.insert("car")
trie.insert("cattle")
console.log(trie.search("cattle"))
console.log(trie.suggest("ca"))
console.log(trie.longestprefix("carracing"))