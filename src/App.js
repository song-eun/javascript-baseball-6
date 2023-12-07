import BaseballGame from './domain/BaseballGame';
import validateNumbers from './utils/validateNumbers';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

class App {
  #baseballGame;

  async play() {
    OutputView.printGameStart();
    this.#baseballGame = new BaseballGame();
    await this.enterNumbers();
  }

  async enterNumbers() {
    const player = await InputView.readNumbers();
    validateNumbers(player);
  }
}

export default App;
