function solution(phone_book) {
    var answer = true;
    
    phone_book.sort().forEach((item, i) => {
        if(phone_book[i+1]?.slice(0, item.length) === item) 
        return answer = false
    })
    
    return answer;
}