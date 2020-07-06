import { User } from 'data/network/graphql/common/models/User';

export const userQueries = {
  users: (): User[] => {
    return [new User(1)];
  },
};
