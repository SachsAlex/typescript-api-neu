import {
  Query,
  Controller,
  Get,
  Route,
  SuccessResponse,
  Tags,
} from '@tsoa/runtime';

import { StatusCodes } from 'http-status-codes';
import UserModel from '../../database/models/UserModel';
import { UserAttributes } from '../../interfaces/db-models/UserAttributes';

export interface ISetUserBody {
  id?: number;
  name: string;
  email: string;
  password: string;
  profileImgUrl?: string;
}

export type ISetUserResponse = boolean;

@Route('v1/users')
@Tags('Users')
class UsersController extends Controller {
  @Get('/user')
  @SuccessResponse(StatusCodes.CONFLICT)
  public async getUserById(
    @Query() id: number,
  ): Promise<UserAttributes | Error | null> {
    if (id) {
      const user = await UserModel.findOne({
        where: { id },
      });
      return user;
    }
    return null;
  }
}

export default UsersController;
