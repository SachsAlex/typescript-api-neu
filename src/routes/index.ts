import { Router } from 'express';
import TodosRouter from './todos';
import UserRouter from './users/UsersRouter';
import DeviceInfoRouter from './deviceinfo';

const AppRouter = Router();

AppRouter.use('/todos', TodosRouter);
AppRouter.use('/users', UserRouter);
AppRouter.use('/adddeviceinfo', DeviceInfoRouter);

AppRouter.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

export default AppRouter;
