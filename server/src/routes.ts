import { Router } from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';
import SessionController from './controllers/SessionController';

const router = Router();

router.get('/', (_req, res, _next) => {
  res.status(200).send({
    title: 'API Proffy',
    version: '0.0.1',
  });
});

router.get('/classes', ClassesController.index);
router.post('/classes', ClassesController.create);

router.get('/connections', ConnectionsController.index);
router.post('/connections', ConnectionsController.create);

router.get('/users', UsersController.index);
router.post('/users', UsersController.create);

router.post('/login', SessionController.store);

export default router