/**
 * function buildSearchIndex(words):
    index = {}  // Empty hash table
    for each word in words:
        for i = 1 to length(word):
            prefix = substring(word, 1, i)  // Extract substring from first character up to i-th position
            if index has property prefix:
                append word to index[prefix]  // Append word to existing array
            else:
                index[prefix] = [word]  // Create new property with word as an array value

    return index

function searchWords(searchTerm, index):
    prefix = substring(searchTerm, 1, desiredLength)  // Extract substring based on desired length
    if index has property prefix:
        return index[prefix]  // Return array of matching words
    else:
        return []  // No matches found

// Example usage
words = ['apple', 'banana', 'cherry', 'cat', 'dog', 'elephant']
index = buildSearchIndex(words)

searchTerm = 'be'
matchingWords = searchWords(searchTerm, index)
// matchingWords contains ['berry']

searchTerm = 'bermuda'
matchingWords = searchWords(searchTerm, index)
// matchingWords contains ['berry', 'bermuda']

 */

/**
 * class TrieNode {
    children: Map<Character, TrieNode>
    isWord: boolean
}

function insertWord(root, word):
    currentNode = root
    for each character in word:
        if currentNode.children does not have character:
            create a new TrieNode and add it to currentNode.children
        move to the next TrieNode
    mark the last TrieNode as a word (isWord = true)

function searchWords(root, searchTerm):
    currentNode = root
    for each character in searchTerm:
        if currentNode.children does not have character:
            return empty result list
        move to the next TrieNode
    return collectWordsFromNode(currentNode)

function collectWordsFromNode(node):
    results = []
    if node.isWord:
        add node's word to results
    for each childNode in node.children:
        recursively collect words from childNode and add them to results
    return results

 */