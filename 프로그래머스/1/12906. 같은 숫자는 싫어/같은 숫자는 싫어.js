function solution(arr)
{
    var answer = [];
    
    arr.forEach((item, i) => {
        if(item !== arr[i+1]) answer.push(item)
    })
    
    return answer;
}