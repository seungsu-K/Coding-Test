function solution(rsp) {
    var answer = '';
    const replace = {'2':'0', '0':'5', '5':'2'}
    
    for(let i = 0; i<rsp.length; i++) {
        answer += replace[rsp[i]]
    }
        
    return answer;
}