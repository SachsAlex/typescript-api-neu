/* eslint-disable @typescript-eslint/no-floating-promises */
import { Router } from 'express';
import UsersController from './UsersController';
import { StatusCodes } from 'http-status-codes';

const UsersRouter = Router();

/**
 * GET
 */
UsersRouter.get('/user/byId', async (req, res) => {
  const controller = new UsersController();
  const userId = parseInt(req.query.id as string);
  const result = await controller.getUserById(userId);
  res.status(StatusCodes.OK).json(result);
});

export default UsersRouter;
