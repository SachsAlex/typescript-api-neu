import {
  Body,
  Controller,
  Post,
  Route,
  Request,
  SuccessResponse,
  Tags,
} from '@tsoa/runtime';
import { Request as ExpressRequest } from 'express';
import { StatusCodes } from 'http-status-codes';
import DeviceInfoModel from '../../database/models/DeviceInfoModel';

export interface ISetDeviceInfoBody {
  userId: number;
  version: string;
  baseOS: 'ios' | 'android' | 'windows' | 'web';
}
export type ISetDeviceInfoResponse = boolean;

@Route('v1/stats')
@Tags('Statistics')
class StatsController extends Controller {
  @Post('/deviceinfo')
  @SuccessResponse(StatusCodes.CONFLICT)
  public async setDeviceInfo(
    @Request() req: ExpressRequest,
    @Body() body: ISetDeviceInfoBody,
  ): Promise<ISetDeviceInfoResponse | Error> {
    const { userId, version, baseOS } = body;

    if (userId) {
      await DeviceInfoModel.destroy({
        where: { userId, baseOS },
      });
    }
    await DeviceInfoModel.create({
      userId,
      version,
      baseOS,
    });
    return true;
  }
}

export default StatsController;
