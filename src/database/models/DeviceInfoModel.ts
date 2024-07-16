import { DataTypes, Model, Optional } from 'sequelize';
import todoSequelize from '../setup/database';
import { DeviceInfoAttributes } from '../../interfaces/db-models/DeviceInfoAttributes';

interface DeviceInfoCreationAttributes
  extends Optional<DeviceInfoAttributes, 'id'> {}

// Define the Todo model class
class DeviceInfoModel
  extends Model<DeviceInfoAttributes, DeviceInfoCreationAttributes>
  implements DeviceInfoAttributes
{
  public id!: number;

  public userId!: number;

  public baseOS!: string;

  public version!: string;

  // Timestamps
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

DeviceInfoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    baseOS: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    version: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  { tableName: 'DeviceInfos', sequelize: todoSequelize },
);

export default DeviceInfoModel;
