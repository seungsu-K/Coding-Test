function solution(n) {
    var answer = 0;
    let count = 1
    
    for (let i = 1; i <= 10; i++) {
        count *= i
        if ( n >= count ) {
            answer = i
            continue;
        } else {
            break;
        }
    }
    return answer;
}