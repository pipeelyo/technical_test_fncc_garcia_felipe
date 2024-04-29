import express from "express";
export const priorityRouter = express.Router();

const path = "/task/priority";

// Get all status
priorityRouter.get(`${path}`, (req, res) => {
    res.json({"Priority": "get"});
});

// Get status by id
priorityRouter.get(`${path}/:id`, (req, res) => {
    res.json({"Priority": "Get priority by id"});
})