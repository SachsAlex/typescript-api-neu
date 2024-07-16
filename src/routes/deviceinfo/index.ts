import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import DeviceInfoModel from '../../database/models/DeviceInfoModel';
import { ICreateNewDeviceInfoBody } from '../../interfaces/routers/DeviceInfoRequests';

const DeviceInfoRouter = Router();

// POST REQUESTS
DeviceInfoRouter.post('/create', async (req, res) => {
  const { newBaseOS, newVersion, newUserId } =
    req.body as ICreateNewDeviceInfoBody;

  console.log('Here we are', newBaseOS, newVersion, newUserId);
  if (!newBaseOS || !newVersion || !newUserId) {
    throw ReferenceError('One of my required Parameters is not defined');
  }

  const newDevice = {
    baseOS: newBaseOS,
    version: newVersion,
    userId: newUserId,
  };

  const device = await DeviceInfoModel.create(newDevice);

  res.status(StatusCodes.OK).json({ device: device });
});

export default DeviceInfoRouter;
