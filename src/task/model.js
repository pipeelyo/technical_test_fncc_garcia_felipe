import {pool} from "../db/conection.js";

class TaskModel {
    constructor(
        table = "task",
        columns = ['name', 'description', 'begin_date', 'end_date', 'duration', 'id_priority', 'id_status']
    ) {
        this.table = table;
        this.columns = columns;
    }

    async getAllTask() {
        const query = `SELECT * FROM ${this.table}`
        const result = await pool.query(query);
        return result[0];
    }

    /**
     * @param {int} idTask The date
     */
    async getTaskByID(idTask) {
        const query = `SELECT * FROM ${this.table} where id_${this.table} = ${idTask}`
        const result = await pool.query(query);
        return result[0];
    }

    /**
     * @param {any} task The date
     */
    async createTask(task) {
        const query = `INSERT INTO ${this.table} (${this.columns.join()})
        VALUES (${task}); `;
        const result = await pool.query(query);
        return result[0];
    }

    /**
     * @param {int} idTask The date
     * @param {any} task The date
     */
    async updateTask(idTask, task) {
        const query = `UPDATE ${this.table} (${this.columns.join()})
        VALUES (${task}); `;
        const result = await pool.query(query);
        return result[0];
    }
}