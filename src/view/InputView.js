import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants';

const InputView = {
  async readNumbers() {
    try {
      const input = await Console.readLineAsync(MESSAGE.INPUT_NUMBER);
      console.log(input);
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default InputView;
