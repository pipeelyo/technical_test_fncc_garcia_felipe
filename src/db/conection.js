import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: process.env.MYSQLDB_HOST,
    user: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    port: process.env.MYSQLDB_DOCKER_PORT
});