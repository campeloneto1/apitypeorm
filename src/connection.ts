import {DataSource, DataSourceOptions} from 'typeorm';
import "reflect-metadata";
import dotenv from 'dotenv';

import { User } from './models/user.model';
import { Perfil } from './models/perfil.model';

dotenv.config();

const TYPE = process.env.DB_TYPE;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const DB = process.env.DB_DB;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: HOST,
    port: Number(PORT),
    username: USER,
    password: PASS,
    database: DB,
    synchronize: true,
    logging: true,
    entities: [User, Perfil],
    subscribers: [],
    migrations: [],
});

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))