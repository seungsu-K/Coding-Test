function solution(my_string) {
    var answer = '';
    let letter = [...my_string]
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
    for(let i = 0; i < my_string.length; i++) {
        for (const value of vowels) {
            if (letter[i] === value) {
                letter.splice(i,1)
                i -= 1
                break;
            }
        }
    }
    return answer = letter.join('');
}