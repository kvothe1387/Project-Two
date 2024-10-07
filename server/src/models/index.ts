import sequelize from '../config/connection.js';
import { UserFactory } from './user.js'; // Import the User factory function
import { LegoSetFactory } from './LegoSet.js';  // Import the LegoSet factory function
import { CollectionFactory } from './collection.js';  // Import the Collection factory function
import { WishListFactory } from './WishList.js'; // Import the WishList factory function

// Initailize models
const User = UserFactory(sequelize);
const LegoSet = LegoSetFactory(sequelize);   // Create LegoSet model
const Collection = CollectionFactory(sequelize);  // Create Collection model
const WishList = WishListFactory(sequelize);   // Create WishList model

//Set up associations
User.hasMany(Collection, { foreignKey: 'userId' });
Collection.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(WishList, { foreignKey: 'userId' });
WishList.belongsTo(User, { foreignKey: 'userId' });

LegoSet.hasMany(Collection, { foreignKey: 'legoSetId' });
Collection.belongsTo(LegoSet, { foreignKey: 'legoSetId' });

LegoSet.hasMany(WishList, { foreignKey: 'legoSetId' });
WishList.belongsTo(LegoSet, { foreignKey: 'legoSetId' });

export { User, LegoSet, Collection, WishList };
