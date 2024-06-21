function solution(numbers, k) {
    var answer = 0;

    while (numbers.length / 2 < k) numbers.push(...numbers)
    
    return answer = numbers[(k-1)*2];
}