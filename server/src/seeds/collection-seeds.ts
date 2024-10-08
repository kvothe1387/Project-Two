import { Collection } from '../models/collection.js';

export const seedCollections = async (): Promise<void> => {
  const collectiondata = [
    {
      userId: 1,
      legoSetId: 1,
    },
    {

      userId: 2,
      legoSetId: 2,
    },
    {

      userId: 3,
      legoSetId: 3,
    },
  ];

  try {
    await Collection.bulkCreate(collectiondata);
  } catch (error) {
    console.error('Error seeding LegoSets:', error);
  };
};