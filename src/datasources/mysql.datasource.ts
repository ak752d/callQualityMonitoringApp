import { DataSource } from "typeorm";
import { User } from "../models/entities/user";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User],
    synchronize: false,
    logging: true
});
