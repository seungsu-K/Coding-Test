function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    const pass = []
    const on = []
    const wait = [...truck_weights]
    
    while(on.length || wait.length) {
        answer++
        
        if(answer > bridge_length) {
            pass.push(on.shift())
        }
        
        if(on.reduce((a,c) => a+c,0) + wait[0] <= weight) {
            on.push(wait.shift())
        } else {
            if(wait.length) on.push(0)
        }
    }
    
    return answer;
}