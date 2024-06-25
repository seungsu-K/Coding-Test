function solution(n) {
    var answer = [];
    let i = 2;
    
    while(n >= 2) {
        if (n % i === 0) {
            answer.push(i)
            n /= i;
        } else {
            i++;
        }
    }
    
    return answer = Array.from(new Set(answer));
}