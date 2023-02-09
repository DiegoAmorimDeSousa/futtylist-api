import { Router } from 'express';

import ListController from '../../app/controllers/List/ListController';

const listRouter = Router();

listRouter.get('/', ListController.get);
listRouter.post('/', ListController.create);

export default listRouter;