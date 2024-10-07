import { Model, DataTypes, Sequelize } from "sequelize";
//import { Collection } from "./collection.js";

// Define the attributes for the LegoSet model

interface LegoSetAttributes {
  id?: number;
  setNum: number;  // Unique set number
  setName: string;    // Name of the LEGO set
  imgUrl: string;  // Image URL of the LEGO set
  createdAt?: Date;
  updatedAt?: Date;
}




export class LegoSet extends Model<LegoSetAttributes> implements LegoSetAttributes {
  public id!: number;
  public setNum!: number;
  public setName!: string;
  public imgUrl!: string;

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
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      setName: {
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
      tableName: 'lego_sets',
      modelName: 'LegoSet',
      timestamps: true,
    }
  );

  return LegoSet;
};

// LegoSet.hasMany(Collection, {
//   foreignKey: 'legoSetId', // Foreign key in the Collections table
//   onDelete: 'CASCADE',      // Delete collections when LegoSet is deleted
// });
