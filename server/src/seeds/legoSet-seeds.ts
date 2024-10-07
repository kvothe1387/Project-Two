import { LegoSet } from '../models/LegoSet.js';

export const seedLegoSets = async (): Promise<void> => {
  const legoSetData = [
    {
      id: 1,
      setNum: 10220,
      setName: 'Volkswagen T1 Camper Van',
      imgUrl: '',
    },
    {
      id: 2,
      setNum: 10265,
      setName: 'Ford Mustang',
      imgUrl: '',
    },
    {
      id: 3,
      setNum: 21042,
      setName: 'Statue of Liberty',
      imgUrl: '',
    },
  ];

  try {
    await LegoSet.bulkCreate(legoSetData);
  } catch (error) {
    console.error('Error seeding LegoSets:', error);
  }
};