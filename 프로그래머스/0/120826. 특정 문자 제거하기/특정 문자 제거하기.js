function solution(my_string, letter) {
    let array = [...my_string]
    for (let i = 0; i < my_string.length; i++){
        if(array.includes(letter)) {
            array.splice(array.lastIndexOf(letter),1)
        }
    }
    var answer = array.join('')
    return answer;
}

// return my_string.replaceAll(letter, "");
// 변수 letter를 찾아서 공백으로 변환하기
