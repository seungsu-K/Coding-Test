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
        
        if(wait.length) on.push(wait[0])
        
        if(on.reduce((a,c) => a + c, 0) > weight) {
            on[on.length-1] = 0
        } else {
            wait.shift()
        }
    }
    return answer;
}