function solution(genres, plays) {
    var answer = [];
    const hash = new Map();
    const arr = []
    
    genres.forEach((item, i) => {
        let a = hash.get(item)
        !a ? hash.set(item, [[i, plays[i]]]) : hash.set(item, [...a, [i, plays[i]]].sort((a,b) => b[1] - a[1]))
    })
    
    hash.forEach((value, key) => {
        let count = 0
        value.forEach((item) => count += item[1])
        
        value.length === 1 ? arr.push({key: key, count: count, index: [value[0][0]]}) :
        arr.push({key: key, count: count, index: [value[0][0], value?.[1][0]]})
        
    })
    
    console.log(hash)
    console.log(arr)
    
    arr.sort((a,b) => b.count - a.count).forEach((item) => {
        item.index.length === 1 ? answer.push(item.index[0]) : answer.push(item.index[0], item.index[1])})
        
    return answer;
}