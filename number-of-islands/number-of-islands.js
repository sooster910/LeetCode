var numIslands = function (grid) {
  const visited = grid.map((v) => v.map((v) => false));
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if(dfs(i, j, grid, visited)){
        result+=1;
                      
      };
    }
  }

  return result;
};


const dfs = function (x, y, grid, visited) {
  x = Number(x);
  y = Number(y);
    

 if (0 > x || x >= grid.length || 0 > y || y >= grid[0].length) return false;
    if(!visited[x][y] && (grid[x][y] === "1")){
          visited[x][y] = true;
    dfs(x+1,y , grid,visited)
    dfs(x,y+1,grid,visited)
    dfs(x-1,y,grid,visited)
    dfs(x,y-1,grid,visited)
    return true
 } 
return false
  
};