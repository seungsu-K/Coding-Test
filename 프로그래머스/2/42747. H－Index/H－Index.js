function solution(citations) {
    var answer = 0;

    citations.sort((a,b) => b-a)
    
    for(let i = 0; i < citations.length; i++) {
        if(citations[0] === 0) break;
        if(citations[i] >= i+1) answer = i+1;
        
    }
    
    return answer;
}