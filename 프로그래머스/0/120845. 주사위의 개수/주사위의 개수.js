function solution(box, n) {
    var answer = 1;
    
    for (const value of box) {
        answer = answer * Math.floor(value / n)
    }
    
    return answer;
}