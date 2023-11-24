import { Memoize } from './models/MemoizeModel.js';
import { FrontMemoizeView } from './views/FrontMemoizeView.js';
import { FrontMemoizeController } from './controllers/FrontMemoizeController.js';

const model = new Memoize();
const view = new FrontMemoizeView();
const controller = new FrontMemoizeController(model, view);
controller.app();
