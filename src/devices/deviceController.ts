import { Body, Controller, Post, Route } from 'tsoa';
import { DeviceCreationParams, DeviceService } from './deviceService';

@Route('adddeviceinfo')
export class DeviceController extends Controller {
  @Post()
  public createDevice(@Body() requestBody: DeviceCreationParams): void {
    this.setStatus(201); // set return status 201
    new DeviceService().post(requestBody);
    return;
  }
}
