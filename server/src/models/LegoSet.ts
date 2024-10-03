import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection";

//Define the attributes for the LegoSet model

interface LegoSetAttributes {
  id?: number;
  setNum: string;  // Unique set number
  name: string;    // Name of the LEGO set
  imgUrl: string;  // Image URL of the LEGO set
  createdAt?: Date;
  updatedAt?: Date;
}

class LegoSet extends Model<LegoSetAttributes> implements LegoSetAttributes {
  public id!: number;
  public setNum!: string;
  public name!: string;
  public imgUrl!: string;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

// Initialize the LegoSet model

LegoSet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    setNum: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'LegoSet',
    tableName: 'Lego_sets',
    timestamps: true,
  }

);

export default LegoSet;
