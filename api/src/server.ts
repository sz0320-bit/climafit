import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';
import logger from 'jet-logger';

import 'express-async-errors';

import BaseRouter from './routes';

import Paths from './common/Paths';
import EnvVars from './common/EnvVars';
import HttpStatusCodes from './common/HttpStatusCodes';
import { RouteError } from './common/classes';
import { NodeEnvs } from './common/misc';
import { AppDataSource } from './data-source';
import { ClothingItem } from './entities/clothing-item.entity';


// **** Variables **** //

const app = express();


// **** Setup **** //


AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: unknown) => {
    console.error("Error during Data Source initialization:", err);
  });

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Show routes called in console during development
if (EnvVars.NodeEnv === NodeEnvs.Dev.valueOf()) {
  app.use(morgan('dev'));
}

// Security
if (EnvVars.NodeEnv === NodeEnvs.Production.valueOf()) {
  app.use(helmet());
}

// Add APIs, must be after middleware
app.use(Paths.Base, BaseRouter);

// Add error handler
app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (EnvVars.NodeEnv !== NodeEnvs.Test.valueOf()) {
    logger.err(err, true);
  }
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status;
    res.status(status).json({ error: err.message });
  }
  return next(err);
});


// **** Front-End Content **** //

// Set views directory (html)
const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);

// Set static directory (js and css).
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

// Nav to users pg by default
app.get('/', (_: Request, res: Response) => {
  return res.redirect('/clothing-items');
});

// Redirect to login if not logged in.
app.get('/clothing-items', async (req, res) => {

    const items = await AppDataSource.getRepository(ClothingItem).find();

    console.log(items);
  
    return res.json(items)
})


// **** Export default **** //

export default app;
