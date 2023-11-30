// 깊이 우선 탐색
const graph = {
    1: [2,3],
    2: [4],
    3: [4,5],
    4: [],
    5: []
}

// 중복키 검색으로 Set 타입 사용
const dfs = (here, visited = new Set()) => {
    // Set에 here가 있으면 : 방문했으면 끝
    if(visited.has(here)) return
    visited.add(here)
    console.log(here)
    graph[here].forEach(element => {
        dfs(element, visited)
    });
}

dfs(1)