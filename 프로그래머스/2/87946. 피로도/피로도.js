function solution(k, dungeons) {
    var answer = [];
    
    const permutations = (arr) => {
        const results = [];
        if (arr.length === 1) return arr.map((el) => [el]); 

        arr.forEach((value, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
        const permu = permutations(rest); 
        const attached = permu.map((el) => [value, ...el]); 

        results.push(...attached); 
        });

        return results
    }
 
    const a = permutations(dungeons)
    
    a.forEach((value) => {
        let count = 0;
        let i = k
        
        value.forEach((value2, index) => {
            if(i >= value2[0]) {
                i = i - value2[1]
                count++
            }
            
            if(index === value.length -1) {
                answer.push(count);
                count = 0
        }
        })
    })
    
    return Math.max(...answer)
}