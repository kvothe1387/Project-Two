import { WishList } from '../models/WishList.js';

export const seedWishLists = async (): Promise<void> => {
  const wishListdata = [
    {
      userId: 1,
      legoSetId: 3,
    },
    {
      userId: 2,
      legoSetId: 1,
    },
    {
      userId: 3,
      legoSetId: 2,
    },
  ];
  try {
    await WishList.bulkCreate(wishListdata);
  } catch (error) {
    console.error('Error seeding LegoSets:', error);
  }
};