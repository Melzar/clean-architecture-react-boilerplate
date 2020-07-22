export const GET_USER_QUERY = `
  query($id: ID!) {
        user(id: $id) {
            id
            firstName
            lastName
            equipment
        }
  }
`;
