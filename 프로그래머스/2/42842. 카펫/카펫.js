function solution(brown, yellow) {
    var answer = [];
    
    const oneSide = brown / 2;
    
    for (let i = 1; i < oneSide; i++) {
        const width = oneSide - i
        const height = i
        
        if(width < height) break;
        
        if((width - 2) * height === yellow) return answer = [width, height + 2]
    }
    
    return answer;
}