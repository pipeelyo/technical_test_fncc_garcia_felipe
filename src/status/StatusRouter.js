import express from "express";
import {Status} from "./StatusModel.js";
export const statusRouter = express.Router();

const path = "/task/status";

// Get all status
statusRouter.get(`${path}`, async (req, res) => {
    const states = await Status.findAll();
    res.json(states);
});

// Get status by id
statusRouter.get(`${path}/:id`, async (req, res) => {
    const id = req.params.id;
    const status = await Status.findByPk(id).then(status => {
        if (!status) {
            res.json({});
        }
        return status;
    });
    res.json(status);
});