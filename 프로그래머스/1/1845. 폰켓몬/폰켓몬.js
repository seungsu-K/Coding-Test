function solution(nums) {
    let answer;
    const num = nums.length / 2
    const arr = new Set(nums)
    
    arr.size > num ? answer = num : answer = arr.size
    
    return answer;
}