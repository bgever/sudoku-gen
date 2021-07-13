import { GRID_SIZE, LINE_CONTAINER } from '../../constants';
import { Board } from '../../types';

export const sequenceToBoard = (sequence: string): Board =>
  sequence.split('').reduce((acc, token, tokenIndex) => {
    const tokenRowIndex = Math.floor(tokenIndex / GRID_SIZE);

    return acc.map((row, rowIndex) => (rowIndex === tokenRowIndex ? [...row, token] : row));
  }, LINE_CONTAINER);
