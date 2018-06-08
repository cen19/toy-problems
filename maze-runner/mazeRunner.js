const mazeRunner = function(maze, directions) {
  let currY = maze.findIndex(array => array.includes(2));
  let currX = maze[currY].findIndex(el => el === 2);

  const isSafeToGo = function(x, y) {
    if (maze[y] === undefined || maze[y][x] === undefined || maze[y][x] === 1) {
      return 'Dead';
    }

    if (maze[y][x] === 3) {
      return 'Finish';
    }

    return true;
  };

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === 'N') {
      currY--;
    } else if (directions[i] === 'S') {
      currY++;
    } else if (directions[i] === 'W') {
      currX--;
    } else if (directions[i] === 'E') {
      currX++;
    }

    let status = isSafeToGo(currX, currY);
    if (status !== true) {
      return status;
    }
  }
  // return lost of we ran out of moves and not dead
  return 'Lost';
};

module.exports = mazeRunner;