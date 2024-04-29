import express from "express";
import {Task} from "./TaskModel.js";

export const taskRouter = express.Router();

const path = "/task";

// Get all task
taskRouter.get(`${path}`, async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
});

// Get individual task
taskRouter.get(`${path}/:id`, async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(id).then(task => {
        if (!task) {
            res.json({});
        }
        return task;
    });
    res.json(task);
});

// Create a task
taskRouter.post(`${path}`, async (req, res) => {
    const data = req.body;
    const task = await Task.create(data);
    res.json(task);
})

// Update a task
taskRouter.put(`${path}/:id`, async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const result = await Task.update(
        data,
        {where: {id_task: id}}
    );
    res.json(result);
})

// Delete a task
taskRouter.delete(`${path}/:id`, async (req, res) => {
    const id = req.params.id;
    const result = await Task.destroy({
        where: {id_task: id}
    });
    res.json(result);
})