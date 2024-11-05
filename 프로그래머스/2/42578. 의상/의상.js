function solution(clothes) {
    var answer = 1;
    
    const hash = new Map()
    clothes.forEach((item) => {
        let a = hash.get(item[1])
        !a ? hash.set(item[1], 1) : hash.set(item[1], ++a)
    })
    
    hash.forEach((item) => answer *= item + 1)
    
    return answer - 1;
}