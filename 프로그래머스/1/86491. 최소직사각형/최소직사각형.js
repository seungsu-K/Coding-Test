function solution(sizes) {
    var answer = 0;
    
    sizes.forEach((item, i) => {
        sizes[i] = item.sort((a, b) => a - b)
    })
    
    const w = sizes.map((item) => item[0])
    const h = sizes.map((item) => item[1])
    
    return answer = Math.max(...w) * Math.max(...h)
}