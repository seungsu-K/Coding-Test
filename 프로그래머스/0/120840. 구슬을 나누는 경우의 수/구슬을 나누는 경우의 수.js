function solution(balls, share) {
    var answer = 1;
    for (let i = balls; i > (balls-share); i--) {
        answer *= i
    }
    
    for (let j = share; j > 0; j--) {
        answer /= j
    }
    
    return Math.floor(answer);
}