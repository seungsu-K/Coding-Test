function solution(k, dungeons) {
    let maxCount = 0;

    const explore = (currentFatigue, visitedCount, visited) => {
        maxCount = Math.max(maxCount, visitedCount);

        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && currentFatigue >= dungeons[i][0]) {
                visited[i] = true;
                explore(currentFatigue - dungeons[i][1], visitedCount + 1, visited);
                visited[i] = false;
            }
        }
    };

    explore(k, 0, Array(dungeons.length).fill(false));

    return maxCount;
}
