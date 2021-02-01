const randomCellValue = () => {
  const values = [0,1,2,3,4,5,6,7,8,'m'];
  return values[Math.floor(Math.random() * values.length)];
}

const randomCellState = () => {
  const values = ['covered', 'uncovered', 'flagged'];
  return values[Math.floor(Math.random() * values.length)];
}

const covered = () => ({
  state: 'covered',
  value: 0,
});

const random = () => ({
  state: randomCellState(),
  value: randomCellValue(),
});

const coveredGrid = (size: number) => Array(size).fill(Array(size).fill(0)).map(row => row.map(covered));
const randomGrid = (size: number) => Array(size).fill(Array(size).fill(0)).map(row => row.map(random));

export {
  coveredGrid,
  randomGrid,
}