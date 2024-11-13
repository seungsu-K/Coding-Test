function solution(prices) {
    var answer = [];
    
    for(let i = 0; i < prices.length; i++) {
        let count = 0;
        
        if(i == prices.length - 1) answer.push(0)
        
        for(let j = i + 1; j < prices.length; j++) {
            if(prices[i] <= prices[j]) {
                count++
            } else {
                answer.push(++count)
                count = 0
                break;
            }
            
            if(j == prices.length - 1) {
                answer.push(count)
                count = 0
            }
        }
    }
    
    return answer;
}