import express from "express";
export const statusRouter = express.Router();

const path = "/task/status";

// Get all status
statusRouter.get(`${path}`, (req, res) => {
    res.json({"Status": "get"});
});

// Get status by id
statusRouter.get(`${path}/:id`, (req, res) => {
    res.json({"Status": "Get status by id"});
})