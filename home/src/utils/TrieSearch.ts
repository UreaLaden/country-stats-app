class TrieNode {
  public children: Map<string, TrieNode>;
  public isEndOfWord: boolean;
  public word: string | null;
  public char: string | undefined;


  constructor() {
    this.children = new Map<string, TrieNode>();
    this.isEndOfWord = false;
    this.word = null;
  }
}

export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    let current:TrieNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char: string = word[i];

      const node = current.children.get(char);
      if (!node) {
        const newNode = new TrieNode();
        newNode.char = char;
        current.children.set(char,newNode);
      }

      current = current.children.get(char) as TrieNode;
    }

    current.isEndOfWord = true;
    current.word = word;
  }

  search(word: string) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!current.children.get(char)) {
        return false;
      }

      current = current.children.get(char) as TrieNode;
    }

    return current.isEndOfWord;
  }

  startsWith(prefix: string) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];

      if (!current.children.get(char)) {
        return false;
      }

      current = current.children.get(char) as TrieNode;
    }

    return true;
  }

  getPrefixNode(prefix: string) {
    let current = this.root;

    for (const char of prefix) {
      if (current.children.has(char)) {
        current = current.children.get(char) as TrieNode;
      } else {
        return null;
      }
    }
    return current;
  }

  getKeyByValue(map:Map<string,TrieNode>,value:TrieNode){
    for (const [key,mapValue] of map.entries()){
        if(mapValue === value){
            return key;
        }
    }
    return undefined;
  }

  compileNodes(words: string[]) {
    for (const word of words) {
      this.insert(word.toLowerCase());
    }
  }

  selectCountriesWithPrefix(prefix: string, trie: Trie):string[] {
    const prefixNode = trie.getPrefixNode(prefix);

    if (!prefixNode) {
      return [];
    }

    const selectedCountries:string[] = [];

    function collectCountries(node: TrieNode, prefixSoFar: string) {
      if (node.isEndOfWord) {
        selectedCountries.push(node.word as string);
      }

      for(const child of node.children.values()){
        const nextPrefix = prefixSoFar + child.char;
        collectCountries(child,nextPrefix);
      }
    }

    collectCountries(prefixNode,prefix);
    return selectedCountries;
  }
}

// Example usage:
//   const trie = new Trie();
//   trie.insert("cat");
//   trie.insert("car");
//   trie.insert("cab");

//   console.log(trie.search("car")); // true
//   console.log(trie.search("can")); // false
//   console.log(trie.startsWith("ca")); // true
//   console.log(trie.startsWith("be")); // false
