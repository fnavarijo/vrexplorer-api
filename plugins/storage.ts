import { Plugin } from "hapi";

import { createStorage, storage } from '@/storage';
// TODO: improve namings
import { connectors } from '@/storage/client';

import { StoragePlugin } from '@/plugins/types';

const plugin: Plugin<StoragePlugin> = {
  name: 'storage',
  version: '1.0.0',
  register: async function (_, options) {
    const { dialect, connectionURI } = options;
    const storageConstructor = connectors[dialect];

    createStorage(storageConstructor, connectionURI);
    await storage.authenticate();
  },
}

export {
  plugin
};
