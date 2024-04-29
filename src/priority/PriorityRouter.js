import express from "express";
import {Priority} from "./PriorityModel.js";

export const priorityRouter = express.Router();

const path = "/task/priority";

// Get all status
priorityRouter.get(`${path}`, async (req, res) => {
    const priorities = await Priority.findAll();
    res.json(priorities);
});

// Get status by id
priorityRouter.get(`${path}/:id`, async (req, res) => {
    const id = req.params.id;
    const priority = await Priority.findByPk(id).then(priority => {
        if (!priority) {
            res.json({});
        }
        return priority;
    });
    res.json(priority);
})