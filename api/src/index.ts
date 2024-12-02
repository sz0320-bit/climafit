import logger from 'jet-logger';

import EnvVars from './common/EnvVars';
import server from './server';


// **** Run **** //

const SERVER_START_MSG = ('Express server started on port: ' + 
  EnvVars.Port.toString());

server.listen(3000, () => logger.info(SERVER_START_MSG));
