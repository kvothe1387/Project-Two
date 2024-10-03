import { Model, DataTypes, ForeignKey } from "sequelize";
import sequelize from "../config/connection";
import { User } from "./user";
import LegoSet from "./LegoSet";

//Define the attributes for the collection model
interface CollectionAtributes {
  id?: number;
  userId: ForeignKey<number>; // Refernece to the user
  legoSetId: ForeignKey<number> // Refernece to the LEGO set
  createdAt?: Date;
  updatedAt?: Date;
}

//Extend sequelize's model class
class Collection extends Model<CollectionAtributes> implements CollectionAtributes {
  public id!: number;
  public userId!: ForeignKey<number>;
  public legoSetId!: ForeignKey<number>;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

// Initialize the Collection model
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
    modelName: 'Collection',
    tableName: 'collections', // Name of the table in the db
    timestamps: true,
  }
);

// Define associations
Collection.belongsTo(User, { foreignKey: 'userId' }); // Associate with User
Collection.belongsTo(LegoSet, { foreignKey: 'legoSetId' }); // Associate with LegoSet

export default Collection;