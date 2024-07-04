function solution(s) {
    var answer = 0;
    let arr = s.split(' ')
    arr.forEach((item) => {
        if(arr.includes('Z')) {
            arr[arr.indexOf('Z')] = -arr[arr.indexOf('Z')-1];
        } 
        
        answer += +item
    })
    return answer;
}