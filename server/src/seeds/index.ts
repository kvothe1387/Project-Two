import { seedUsers } from './user-seeds.js';
import sequelize from '../config/connection.js';
import { seedLegoSets } from './legoSet-seeds.js';
import { seedCollections } from './collection-seeds.js';
import { seedWishLists } from './wishList-seeds.js';


const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers(); // Seeding Users
    console.log('\n----- USERS SEEDED -----\n');

    await seedLegoSets(); // Seeding LEGO sets
    console.log('\n---- LEGO SETS SEEDED----\n');

    await seedCollections(); // Seeding Collections
    console.log('\n---- COLLECTIONS SEEDED---- \n');

    await seedWishLists(); // Seeding Wish Lists
    console.log('\n---- WISH LISTS SEEDED ----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
