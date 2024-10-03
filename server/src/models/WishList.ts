import { Model, DataTypes, ForeignKey, Sequelize } from 'sequelize';
import { User } from './user';
import { LegoSet } from './LegoSet';  // Import the LegoSet model

// Define the attributes for the WishList model
interface WishListAttributes {
  id?: number;
  userId: ForeignKey<number>;  // Reference to the user
  legoSetId: ForeignKey<number>;  // Reference to the LEGO set
  createdAt?: Date;
  updatedAt?: Date;
}

// Extend Sequelize's Model class
class WishList extends Model<WishListAttributes> implements WishListAttributes {
  public id!: number;
  public userId!: ForeignKey<number>;
  public legoSetId!: ForeignKey<number>;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the WishList model
export const WishListFactory = (sequelize: Sequelize): typeof WishList => {
  WishList.init(
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
          key: 'id',
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
      modelName: 'WishList',
      tableName: 'wish_lists',  // Name of the table in the database
      timestamps: true,
    }
  );
  return WishList;
};