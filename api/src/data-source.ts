import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import EnvVars from "./common/EnvVars";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, '.env') });


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  url: process.env.DATABASE_URL, // Use the connection string directly
  password: EnvVars.pass,
  database: EnvVars.dbName,
  synchronize: true,
  logging: true,
  entities: [path.join(__dirname, './entities/*.entity.{ts,js}')], // Matches both TS and JS files
  subscribers: [],
  migrations: [],
});
