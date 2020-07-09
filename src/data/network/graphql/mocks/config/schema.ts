export const schema = `
   type Query {
        user(id: ID!): User!
        users: [User!]!
        equipmentList: [Equipment!]!
        equipment(id: ID!): Equipment!
   }
   
   type User {
        id: ID!
        equipment: [Equipment!]!
   }
   
   type Equipment {
        id: ID!
   }
`;
