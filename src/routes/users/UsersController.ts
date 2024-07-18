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

@Route('v1/users')
@Tags('Users')
class UsersController extends Controller {
  @Get('/user')
  @SuccessResponse(StatusCodes.CONFLICT)
  public async getUserById(
    @Query() id: number,
  ): Promise<UserAttributes | Error | null> {
    // UserAttributes für UserModel möglich durch implements in UserModel.ts
    if (id) {
      const user = await UserModel.findOne({
        where: { id },
      }); // Error möglich (DB-Verbindung z.B.)
      return user; // UserModel | null
    }
    return null; // nur null
  }
}

export default UsersController;
