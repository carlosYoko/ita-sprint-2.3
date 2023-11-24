import inquirer from 'inquirer';
import { Memoize } from '../models/MemoizeModel';
import { CliMemoizeView } from '../views/CliMemoizeView';

export class CliMemoizeController {
  private model: Memoize;
  private view: CliMemoizeView;

  constructor(model: Memoize, view: CliMemoizeView) {
    this.model = model;
    this.view = view;
  }

  async main() {
    let isExit = false;
    const addNumbersMemoize = this.model.addWithMemoize();

    console.log(`
     __________________
    | Memoize Function |
     ------------------
    `);

    while (!isExit) {
      const { num1, num2 } = await inquirer.prompt([
        {
          type: 'number',
          name: 'num1',
          prefix: '',
          message: 'Ingresa el primer número:',
        },
        {
          type: 'number',
          name: 'num2',
          prefix: '',
          message: 'Ingresa el segundo número:',
        },
      ]);

      const result = await addNumbersMemoize(num1, num2);
      this.view.showMessage(result);

      const { exit } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'exit',
          prefix: '',
          message: '¿Quieres hacer otro cálculo?',
        },
      ]);

      isExit = !exit;
    }

    console.log(`
    Bye!
    `);
  }
}
