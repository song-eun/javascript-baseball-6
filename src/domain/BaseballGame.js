import makeRandomNumbers from '../utils/makeRandomNumbers';

class BaseballGame {
  #winningNumbers;

  constructor() {
    this.#winningNumbers = makeRandomNumbers();
  }
}

export default BaseballGame;
