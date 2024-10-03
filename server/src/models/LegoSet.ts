import { Model, DataTypes, Optional, Sequelize } from "sequelize";

//Define the attributes for the LegoSet model

interface LegoSetAttributes {
  id?: number;
  setNum: string;  // Unique set number
  name: string;    // Name of the LEGO set
  imgUrl: string;  // Image URL of the LEGO set
  createdAt?: Date;
  updatedAt?: Date;
}


interface LegoSetCreationAttributes extends Optional<LegoSetAttributes, 'id'> { }

export class LegoSet extends Model<LegoSetAttributes, LegoSetCreationAttributes> implements LegoSetAttributes {
  public id!: number;
  public setNum!: string;
  public name!: string;
  public imgUrl!: string;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

// Initialize the LegoSet model
export const LegoSetFactory = (sequelize: Sequelize): typeof LegoSet => {
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
      tableName: 'lego_sets',
      timestamps: true,
    }
  );

  return LegoSet;
};
