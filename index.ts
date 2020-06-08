import Hapi from '@hapi/hapi';
import { ApolloServer } from 'apollo-server-hapi';

import typeDefs from '@/typedefs';
import { resolvers } from '@/data';

const init = async (): Promise<void> => {
  const server = new ApolloServer({ typeDefs, resolvers })

  const app = Hapi.server({
    port: 4000,
    host: '0.0.0.0',
  });

  // app.route({
  //   method: 'GET',
  //   path: '/',
  //   handler: (request, h) => {
  //     return 'Hello World';
  //   }
  // });
  await server.applyMiddleware({
    app,
  });

  await server.installSubscriptionHandlers(app.listener);

  await app.start();
  console.log('Server running on %s', app.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();