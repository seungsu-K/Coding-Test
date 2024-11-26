function solution(answers) {
    var answer = [];
    
    const a = [1,2,3,4,5]
    const b = [2,1,2,3,2,4,2,5]
    const c = [3,3,1,1,2,2,4,4,5,5]
    
    const count = [0,0,0]
    
    answers.forEach((item, i) => {
        if(item === a[i%5]) count[0]++
        if(item === b[i%8]) count[1]++
        if(item === c[i%10]) count[2]++
    })
  
    const max = Math.max(...count)
    
    count.forEach((item, i) => {
        if(item === max) answer.push(i + 1)
    })
    
    return answer;
}