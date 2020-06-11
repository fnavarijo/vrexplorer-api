import { BaseStorageConnector } from '@/storage/client/base';

let storage: BaseStorageConnector;

function createStorage<T extends BaseStorageConnector> (
  storageConstructor: new (connectionURI: string) => T,
  connectionURI: string
): void {
  console.info('Creating storage constructor');
  storage = new storageConstructor(connectionURI);
}

export { createStorage, storage };
