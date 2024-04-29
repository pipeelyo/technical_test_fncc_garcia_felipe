import {Sequelize} from 'sequelize';

// Credentials
const databaseName = process.env.MYSQLDB_DATABASE;
const username = process.env.MYSQLDB_USER;
const password = process.env.MYSQLDB_PASSWORD;
const host = process.env.MYSQLDB_HOST;

// Connection to Database
export const connection = new Sequelize(
    databaseName,
    username,
    password,
    {host, dialect: 'mysql'}
);