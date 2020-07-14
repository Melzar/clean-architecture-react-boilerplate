import { User } from 'data/network/graphql/common/models/User';
import { Equipment } from 'data/network/graphql/common/models/Equipment';

type Users = {
  [key: string]: User;
};

const users: Users = {
  '1': new User(1, [new Equipment(1)]),
  '2': new User(2, [new Equipment(1), new Equipment(2)]),
};

export const userQueries = {
  users: (): User[] => {
    return [users['1'], users['2']];
  },
  user: (_: any, { id }: { id: string }) => {
    return users[id];
  },
};
