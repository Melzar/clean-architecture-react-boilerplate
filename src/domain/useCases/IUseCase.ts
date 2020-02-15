export interface IUseCase<A, T> {
  execute(...args: A[]): Promise<T> | T;
}
