export const GET_USER_EQUIPMENT_QUERY = `
    query GetDrawingsAndRenders($id: ID!) {
        user(id: $id) {
            equipment {
                id
            }
        }
    }
`;
