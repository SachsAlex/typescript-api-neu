import { DeviceInfoAttributes } from '../interfaces/db-models/DeviceInfoAttributes';

// A post request should not contain an id.
export type DeviceCreationParams = Pick<
  DeviceInfoAttributes,
  'userId' | 'baseOS' | 'version'
>;

export class DeviceService {
  public post(deviceInfo: DeviceCreationParams): DeviceInfoAttributes {
    return deviceInfo;
  }
}
