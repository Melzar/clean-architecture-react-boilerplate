export const schema = `
   type Query {
        users: [User!]!
   }
   
   type User {
        id: ID!
   }
`;
