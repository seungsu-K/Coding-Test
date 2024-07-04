function solution(sides) {
    var answer = 1;
    sides.sort((a, b) => b - a)
    if(sides[0] >= sides[1] + sides[2]) {
        answer = 2
    }
    return answer;
}