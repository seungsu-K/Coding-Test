function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    const on = []
    const wait = [...truck_weights]
    
    while(on.length || wait.length) {
        answer++
        
        if(answer == on[0]?.[0]) {
            on.shift()
        }
        
        if(on.reduce((a,c) => a + c[1], 0) + wait[0] <= weight) {
            on.push([answer + bridge_length, wait.shift()])
        } else {
            if(on[0]) answer = on[0][0] - 1
        }
    }
    
    return answer;
}