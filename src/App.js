import validateNumbers from './utils/validateNumbers';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

class App {
  async play() {
    OutputView.printGameStart();
    await this.enterNumbers();
  }

  async enterNumbers() {
    const player = await InputView.readNumbers();
    validateNumbers(player);
  }
}

export default App;
