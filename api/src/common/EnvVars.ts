/* eslint-disable n/no-process-env */


console.log('Environment Variables:', {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  USERNAME: process.env.USERNAME,
  PASS: process.env.PASS,
  DBNAME: process.env.DBNAME,
});

export default {
  NodeEnv: (process.env.NODE_ENV ?? ''),
  Port: (process.env.PORT ?? 0),
  host: (process.env.HOST),
  username: (process.env.USERNAME ?? ''),
  pass: (process.env.PASS ?? ''),
  dbName: (process.env.DBNAME ?? ''),
} as const;
