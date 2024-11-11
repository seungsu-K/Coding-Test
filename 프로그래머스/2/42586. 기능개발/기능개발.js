function solution(progresses, speeds) {
    var answer = [];
    let count = 1;
    
    const days = progresses.map((item, i) => {
        if((100 - item) % speeds[i] !== 0) {
            return Math.floor((100 - item) / speeds[i]) + 1
        } else {
            return (100 - item) / speeds[i]
        }
        
    })
    
    days.forEach((item, i) => {
        if(item >= days[i + 1]) {
            days[i + 1] = days[i];
            count++;
        }
        
        if(item < days[i + 1] || i == days.length -1) {
            answer.push(count);
            count = 1;
        }
    })
    
    return answer;
}