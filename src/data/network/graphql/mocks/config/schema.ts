export const schema = `
   type Query {
        user(id: ID!): User!
        users: [User!]!
        equipmentList: [Equipment!]!
        equipment(id: ID!): Equipment!
   }
   
   type Mutation {
        authenticate(input: AuthenticateInput): Authentication!
   }
   
   input AuthenticateInput {
        login: String!
        password: String!
   }
   
   type Authentication {
        token: String! 
   }
   
   type User {
        id: ID!
        equipment: [Equipment!]!
   }
   
   type Equipment {
        id: ID!
   }
`;
