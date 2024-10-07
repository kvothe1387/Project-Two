import { Sequelize, Model, DataTypes, } from "sequelize";
import { User } from "./user.js";
import { LegoSet } from "./LegoSet.js";

//Define the attributes for the collection model
interface CollectionAttributes {
  id?: number;
  userId?: number; // Refernece to the user
  legoSetId: number; // Refernece to the LEGO set
  createdAt?: Date;
  updatedAt?: Date;
}

//Extend sequelize's model class
export class Collection extends Model<CollectionAttributes> implements CollectionAttributes {
  public id!: number;
  public userId!: number;
  public legoSetId!: number;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

// Initialize the Collection model
export const CollectionFactory = (sequelize: Sequelize): typeof Collection => {
  Collection.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'userId',
        },
      },
      legoSetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: LegoSet,
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'collections', // Name of the table in the db
      modelName: 'Collection',
      timestamps: true,
    }
  );


  return Collection;
};

// // Setting up associations
// Collection.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
// Collection.belongsTo(LegoSet, { foreignKey: 'legoSetId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
