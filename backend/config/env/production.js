const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_CONTAINER_PORT,
  MONGO_DATABASE,
  REDIS_HOSTNAME,
  REDIS_CONTAINER_PORT,
  FRONTEND_URL
} = process.env;

module.exports = {
  datastores: {
    default: {
      adapter: 'sails-mongo',
      url: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_CONTAINER_PORT}/${MONGO_DATABASE}`
    },
  },
  models: {
    migrate: 'safe',
    attributes: {
      createdAt: { type: 'number', autoCreatedAt: true, },
      updatedAt: { type: 'number', autoUpdatedAt: true, },
      id: { type: 'string', columnName: '_id' }
    }
  },
  blueprints: {
    shortcuts: false,
  },
  security: {
    cors: {
      allowOrigins: [
        FRONTEND_URL
      ]
    }
  },
  session: {
    secret: 'fcea8be379be2dc12d47a5a40a0f7a98',
    adapter: '@sailshq/connect-redis',
    url: `redis://${REDIS_HOSTNAME}:${REDIS_CONTAINER_PORT}/0`,
    cookie: {
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000,  // 24 hours
    }
  },
  sockets: {
    onlyAllowOrigins: [
      FRONTEND_URL
    ],
    adapter: '@sailshq/socket.io-redis',
    url: `redis://${REDIS_HOSTNAME}:${REDIS_CONTAINER_PORT}/0`,
    grant3rdPartyCookie: true,
  },
  log: {
    level: 'debug'
  },
  http: {
    cache: 365.25 * 24 * 60 * 60 * 1000, // One year
  }
};
