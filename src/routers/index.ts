import { Router } from 'express';

import listRouter from './List/list.routes';

const routes = Router();

routes.use('/list', listRouter);

export default routes;