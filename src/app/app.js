import express from "express";
import {appRouter} from "./AppRouter.js";
import {priorityRouter} from "../priority/PriorityRouter.js";
import {statusRouter} from "../status/StatusRouter.js";
import {taskRouter} from "../task/TaskRouter.js";

export const appFncc = express();

// SERVER CONFIGURATION
appFncc.use(express.json());
appFncc.use(appRouter);
appFncc.use(taskRouter);
appFncc.use(statusRouter);
appFncc.use(priorityRouter);