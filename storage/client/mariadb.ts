import { Sequelize } from 'sequelize';

import { BaseStorageConnector } from '@/storage/client/base';

export class MaridDBStorageConnector extends BaseStorageConnector {
  adapter: Sequelize;

  constructor (connectionURI: string) {
    super(connectionURI);
    this.adapter = new Sequelize(connectionURI);
  }

  getUsers (): Array<Dictionary> {
    return [];
  }

  async authenticate (): Promise<void> {
    await this.adapter.authenticate();
    // TODO: Update with a logger (winston or cucumber)
    console.info('Connected correctly to db');
  }
}
