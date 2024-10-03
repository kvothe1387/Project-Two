import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      {
        id: 1,
        username: 'JollyGuru',
        email: 'jolly@guru.com',
        password: 'password'
      },
      {
        id: 2,
        username: 'SunnyScribe',
        email: 'sunny@scribe.com',
        password: 'password',
      },
      {
        id: 3,
        username: 'RadiantComet',
        email: 'radiant@comet.com',
        password: 'password',
      },
    ],
    { individualHooks: true }
  );
};
