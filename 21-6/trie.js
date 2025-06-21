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
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new Node()
            }curr = curr.children[char]
        }curr.isend = true
    }
    longest(word){
        let curr = this.root
        let prefix = ''
        for(let char of word){
            if(curr.children[char]){
                prefix+=char
                curr = curr.children[char]
            }else break
        }return prefix
    }
    common(){
        let curr = this.root
        let prefix = ''
        while(true){
            let keys = Object.keys(curr.children)
            if(keys.length==1&& !curr.isend){
                prefix += keys[0]
                curr = curr.children[keys[0]]
            }else break
        }
        return prefix
    }
    suggestion(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                return []
            }curr = curr.children[char]
        }
        let suggest = []
        let dfs = (node,word) => {
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
    delete(word){
        let curr = this.root
        let path = []
        for(let char of word){
            if(!curr.children[char])return 
            path.push([curr,char])
            curr = curr.children[char]
        }
        if(!curr.isend)return
        curr.isend = false
        for(let i=word.length-1;i>=0;i--){
            let [parent,char] = path[i]
            let node = parent.children[char]
            if(Object.keys(node.children).length > 0 || node.isend){
                break
            }
            delete parent.children[char]
            curr = parent
        }
    }
}

let trie = new Trie()
trie.insert('cat')
trie.insert("cattle")
trie.insert("cartoon")
console.log(trie.common())
console.log(trie.longest("catej"))
console.log(trie.suggestion("c"))
trie.delete("cat")
trie.delete("cattle")
console.log(trie.longest("catej"))