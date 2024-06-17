function solution(letter) {
    morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    
    var answer = [];
    let key = Object.keys(morse);
    let value = Object.values(morse);
    let letterArray = letter.split(' ')
    
    for(let i = 0; i<letterArray.length; i++) {
        answer.push(value[key.indexOf(letterArray[i])])
    }
    
    
    return answer.join('');
}