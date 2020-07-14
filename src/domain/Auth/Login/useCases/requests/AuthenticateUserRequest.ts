export class AuthenticateUserRequest {
  constructor(
    public readonly login: string,
    public readonly password: string
  ) {}
}
