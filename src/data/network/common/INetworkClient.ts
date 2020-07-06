export interface INetworkClient<C> {
  client: C;
  initialize(): void;
}
