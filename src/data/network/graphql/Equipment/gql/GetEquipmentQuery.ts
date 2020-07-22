export const GET_EQUIPMENT_QUERY = `
    query($id: ID!) {
        equipment(id: $id) {
            id
            name
        }
    }
`;
