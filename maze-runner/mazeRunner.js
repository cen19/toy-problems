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

  console.log(currentLocation);
  
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === 'N') {
      let northPosition = [...currentLocation];
      northPosition[0] -= 1;
      northPosition;

      let rowIndex = northPosition[0]; 
      let columnIndex = northPosition[1]; 
      if (maze[rowIndex][columnIndex] === 0) {
        currentLocation = northPosition;
      }
    }
  }

  return 'lost';
};

var maze = [[1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 3],
            [1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 2, 1, 0, 1, 0, 1]];

let directions = ['N'];

console.log(mazeRunner(maze, directions));