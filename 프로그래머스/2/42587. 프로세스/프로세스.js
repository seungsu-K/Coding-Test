function solution(priorities, location) {
    var answer = 0;
    
    let a = []
    let arrIndex = priorities.map((item, i) => [i, item])

    for(let i = 0; i < priorities.length; i++) {
        const sliced = [...arrIndex.slice(i)]
        const max = Math.max(...sliced.map((item) => item[1]))
        const index = sliced.filter((item) => item[1] === max)[0][0]
        const slicedIndex = sliced.findIndex((item) => item[0] === index && item[1] === max)
        
        arrIndex = [...a, ...sliced.slice(slicedIndex), ...sliced.slice(0, slicedIndex)]
        a.push([index, max])
    }
    
    answer = arrIndex.findIndex((item) => item[0] === location && item[1] === priorities[location]) + 1
    
    return answer;
}