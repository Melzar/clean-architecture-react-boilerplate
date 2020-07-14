export const AUTHENTICATE_MUTATION = `
    mutation Authenticate($input: AuthenticateInput) {
        authenticate(input: $input) {
            token
        }
    }
`;
