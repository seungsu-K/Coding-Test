function solution(numbers, direction) {
    var answer = [];
    
    if (direction === 'right') {
        answer.push(numbers.pop())
        answer.push(...numbers)
    } else {
        answer = numbers.slice(1,numbers.length)
        answer.push(numbers[0])
    }
    
    return answer;
}