import express from "express";
export const taskRouter = express.Router();

const path = "/task";

// Get all task
taskRouter.get(`${path}`, (req, res) => {
    res.json({"Task": "get"});
});

// Create a task
taskRouter.post(`${path}`, (req, res) => {
    res.json({"Task": "post"});
})

// Update a task
taskRouter.put(`${path}`, (req, res) => {
    res.json({"Task": "put"});
})

// Delete a task
taskRouter.delete(`${path}`, (req, res) => {
    res.json({"Task": "delete"});
})