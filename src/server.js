/* eslint-disable max-len *//* eslint-disable import/extensions *//* eslint-disable import/no-extraneous-dependencies *//* eslint-disable linebreak-style */
import Hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
