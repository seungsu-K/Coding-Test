function solution(s){
    var answer = true;
    const stack = {open:0, value:[]};
    
    stack.value = s.split('').map((item) => {
        if(item === '(') {
            stack.open++
            return 1
        } else {
            stack.open--
            if(stack.open < 0) return answer = false
            return -1
        }
    })

    console.log(stack)

    if(stack.value[0] == -1 || stack.value[stack.value.length - 1] == 1 || stack.value.reduce((a,c) => a+c, 0) !== 0) return false

    return answer;
}