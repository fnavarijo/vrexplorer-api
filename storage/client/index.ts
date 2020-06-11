import { MaridDBStorageConnector } from '@/storage/client/mariadb';

import { ConnectorsDictionary } from '@/storage/types';

const connectors: ConnectorsDictionary = {
  mariadb: MaridDBStorageConnector,
};

export { connectors };
