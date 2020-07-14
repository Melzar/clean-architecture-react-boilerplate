export class AuthenticateRepositoryRequest {
  constructor(
    public readonly login: string,
    public readonly password: string
  ) {}
}
