/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
     let result = 0;
  const isNotInRange = (x, y) =>
    Number(x) < 0 ||
    Number(x) >= grid.length ||
    Number(y) < 0 ||
    Number(y) >= grid[0].length;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function dfs(x, y) {
    if (isNotInRange(x, y)) return;
     if(grid[x][y]!=="1") return;
    //방문한 곳은 1이 아닌 수로 바꾸기 ->0
    grid[x][y] = "0";

    dfs(dx[0] + Number(x), dy[0] + Number(y)); //북
    dfs(dx[1] + Number(x), dy[1] + Number(y)); //동
    dfs(dx[2] + Number(x), dy[2] + Number(y)); //남
    dfs(dx[3] + Number(x), dy[3] + Number(y)); //서z

  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
          result+=1
      }
    }
  }
    return result
    
};