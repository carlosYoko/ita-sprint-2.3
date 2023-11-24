import { Memoize } from '../models/MemoizeModel';
import { FrontMemoizeView } from '../views/FrontMemoizeView';

export class FrontMemoizeController {
  private model: Memoize;
  private view: FrontMemoizeView;

  constructor(model: Memoize, view: FrontMemoizeView) {
    this.model = model;
    this.view = view;
  }

  app() {
    const addNumbersMemoize = this.model.addWithMemoize();

    const button = document.querySelector('#calculateButton');
    const input1: HTMLInputElement | null =
      document.querySelector('#value-one');
    const input2: HTMLInputElement | null =
      document.querySelector('#value-two');

    button?.addEventListener('click', async () => {
      if (!input1 || !input2) {
        return;
      }

      const result = await addNumbersMemoize(+input1.value, +input2.value);
      this.view.showResponse(result);

      input1.value = '';
      input2.value = '';
    });
  }
}
