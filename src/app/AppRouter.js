import express from "express";

import {initializeStatus} from "../status/StatusModel.js";
import {initializePriority} from "../priority/PriorityModel.js";
import {initializeTask} from "../task/TaskModel.js";
import {initializeSubTask} from "../task/SubTaskModel.js";
import {connection} from "../db/connection.js";

export const appRouter = express.Router();

// INITIALIZATION SQL
appRouter.get(`/initialize`, async (req, res) => {
    const message = await connection.sync().then(async () => {
        console.log('DB synchronized');
        let message = '';
        try {
            initializePriority();
            initializeStatus();
            initializeTask();
            initializeSubTask();
            await connection.sync({alter: true});
            message = 'Database created successfully!';
        } catch (error) {
            message = `Error creating database: ${error}`;
        }
        return message;
    }).catch(error => {
        console.error('Error synchronizing DB:', error);
    });
    res.json({'message': message});
});