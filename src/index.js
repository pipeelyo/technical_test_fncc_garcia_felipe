import express from 'express';
import {config} from "dotenv";
import {taskRouter} from "./task/router.js";
import {statusRouter} from "./status/router.js";
import {priorityRouter} from "./priority/router.js";

config()
const app = express();

// SERVER CONFIGURATION
app.use(express.json());
app.use(taskRouter);
app.use(statusRouter);
app.use(priorityRouter);

const port = process.env.NODE_DOCKER_PORT || 4000;
app.listen(port, () => {
    console.log(`Server listening on port ${process.env.NODE_DOCKER_PORT}`);
});