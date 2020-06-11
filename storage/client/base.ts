export abstract class BaseStorageConnector {
  abstract adapter: unknown;

  constructor (public connectionURI: string) {}

  abstract getUsers (): Array<Dictionary>;

  abstract authenticate (): Promise<void>;
}
