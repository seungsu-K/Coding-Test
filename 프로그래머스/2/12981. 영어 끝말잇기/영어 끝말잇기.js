function solution(n, words) {
    const duplicate = new Set();
    duplicate.add(words[0]);
    
    for(let i = 1; i < words.length; i++) {
        if (words[i][0] !== words[i-1][words[i-1].length-1]) {
            return [i % n + 1, Math.floor(i / n) + 1]
        }
        
        if(duplicate.has(words[i])) {
            return [i % n + 1, Math.floor(i / n) + 1]
        }
        
        duplicate.add(words[i])
    }
    
    return [0,0];
}