import { Memoize } from '../models/MemoizeModel.js';
import { CliMemoizeView } from '../views/CliMemoizeView.js';
import { CliMemoizeController } from '../controllers/CliMemoizeController.js';

const model = new Memoize();
const view = new CliMemoizeView();
const controller = new CliMemoizeController(model, view);
controller.main();
