import { Random } from '@woowacourse/mission-utils';
import { GAME } from '../constants/constants';

const makeRandomNumbers = () => {
  let set = new Set();

  while (set.size < GAME.NUMBERS_LENGTH) {
    set.add(Random.pickNumberInRange(GAME.RANGE_START, GAME.RANGE_END));
  }

  return [...set].join();
};

export default makeRandomNumbers;
