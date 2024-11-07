function solution(genres, plays) {
    var answer = [];
    const hash = new Map();
    const arr = []
    
    genres.forEach((item, i) => {
        let a = hash.get(item)
        
        !a ? hash.set(item, {index: [i], value: [plays[i]], total: plays[i]}) : hash.set(item, {index: [...a.index, i], value: [...a.value, plays[i]], total: a.total + plays[i]})
    })
    
    hash.forEach((value, key) => {
        arr.push(value)
    })
    
    console.log(arr)
    
    arr.sort((a,b) => b.total - a.total).forEach((item) => {
        item.index.sort((a,b) => item.value[item.index.indexOf(b)] - item.value[item.index.indexOf(a)])
        
        item.index.length === 1 ? answer.push(item.index[0]) : answer.push(item.index[0], item.index[1])
    })
        
    return answer;
}