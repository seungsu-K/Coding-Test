function solution(numbers) {
    var answer;
    
    answer = numbers.map((item) => item.toString())
        .sort((a,b) => Number(b+a) - Number(a+b))
        .join('')
    
    if(answer[0] == "0") return "0"
    
    return answer;
}