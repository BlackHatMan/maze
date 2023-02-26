export class Area {
  matrix: number[][][];
  path: string[];
  randomStartY: number;
  constructor(size: number, countSteps: number = 10) {
    this.randomStartY = Math.floor(Math.random() * size);
    this.matrix = this.generateMatrix(size);
    this.path = this.generatePath(countSteps, this.matrix.length - 1, this.randomStartY);
  }
  coordinates: number[][] = [];

  generatePath(steps: number, x: number, y: number): string[] {
    if (steps === 0) return [];

    const data = this.searchNeighbors(steps, x, y);

    const {
      direction,
      coordinate: [nextX, nextY],
    } = data[Math.floor(Math.random() * data.length)];

    this.coordinates.push([nextX, nextY]);

    const nextDirection = this.generatePath(steps - 1, nextX, nextY);

    return [direction, ...nextDirection];
  }

  generateMatrix(size: number) {
    const matrix: number[][][] = [];

    for (let i = 0; i < size; i++) {
      const row: number[][] = [];
      for (let y = 0; y < size; y++) {
        row.push([i, y]);
      }
      matrix.push(row);
    }
    return matrix;
  }

  searchNeighbors = (step: number, x: number, y: number) => {
    let up;
    let down;
    let right;
    let left;
    const neighbors: neighbors[] = [];

    up = this.matrix[x - 1]?.[y];
    down = this.matrix[x + 1]?.[y];
    right = this.matrix[x]?.[y + 1];
    left = this.matrix[x]?.[y - 1];

    if (up) {
      neighbors.push({
        direction: 'up',
        coordinate: up,
      });
    }
    if (down && step > 3) {
      neighbors.push({
        direction: 'down',
        coordinate: down,
      });
    }
    if (right) {
      neighbors.push({
        direction: 'right',
        coordinate: right,
      });
    }
    if (left) {
      neighbors.push({
        direction: 'left',
        coordinate: left,
      });
    }

    return neighbors;
  };
}

type neighbors = {
  direction: 'up' | 'down' | 'left' | 'right';
  coordinate: number[];
};
