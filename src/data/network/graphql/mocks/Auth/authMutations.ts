export const authMutations = {
  authenticate: (_: any, input: { login: string; password: string }) => {
    console.log(input); // TODO TO BE REMOVED LATER
    return {
      token: '123',
    };
  },
};
