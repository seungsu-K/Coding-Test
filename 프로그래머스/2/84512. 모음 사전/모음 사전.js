function solution(word) {
    let answer = 0;
    const arr = ['A', 'E', 'I', 'O', 'U'];
    let c = [781, 156, 31, 6, 1];

    // for (let i = 0; i < 5; i++) {
    //     count += 5 ** i;
    //     digits.unshift(count);
    // }
    
    for(let i = 0 ; i < word.length ; i++){
        answer += arr.indexOf(word[i]) * c[i] + 1;
    }
    
    return answer;
}