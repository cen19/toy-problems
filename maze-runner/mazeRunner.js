const mazeRunner = function(maze, directions) {
  // define the way pieces move throughout the array of arrays when given a direction
  let currentLocation = '';
  maze.forEach((row, i) => {
    row.forEach((el, j) => {
      if (el === 2) {
        currentLocation = [i, j];
      }
    });
  });

  const isSafeToGo = function(coords) {
    // takes in coords
    let min = Math.min(...coords);
    let max = Math.max(...coords);
    if (min < 0) { return 'Dead'; }
    if (max > maze.length - 1) { return 'Dead'; }
    const spot = maze[coords[0]][coords[1]];

    if (spot === 1) {
      return 'Dead';
    } else if (spot === 3) {
      return 'Finish';
    }

    return true;
  };

  let futureSpot = [];

  for (let i = 0; i < directions.length; i++) {
    futureSpot = [...currentLocation];
    if (directions[i] === 'N') {
      futureSpot[0] = futureSpot[0] - 1;
    } else if (directions[i] === 'S') {
      futureSpot[0] = futureSpot[0] + 1;
    } else if (directions[i] === 'W') {
      futureSpot[1] = futureSpot[1] - 1;
    } else if (directions[i] === 'E') {
      futureSpot[1] = futureSpot[1] + 1;
    }

    let spot = isSafeToGo(futureSpot);
    if (spot !== true) {
      return spot;
    }
    currentLocation = futureSpot;
  }

  return 'Lost';
};

module.exports = mazeRunner;