function solution(s) {
    var answer = 0;
    const map = {']':'[', ')':'(', '}':'{'};
    
    for(let i = 0; i < s.length; i++) {
        const stack = [];
        let isValid = true;
        
        for(let j = 0; j < s.length; j++) {
            if (s[j] === '[' || s[j] === '(' || s[j] === '{') {
                stack.push(s[j])
            } else {
                if (stack.length && map[s[j]] === stack[stack.length - 1]) {
                    stack.pop()
                } else {
                    isValid = false;
                    break;
                }
            }
        }
        
        if (isValid && stack.length === 0) answer++;
        
        s = s.slice(1) + s[0];
    }
    
    return answer;
}