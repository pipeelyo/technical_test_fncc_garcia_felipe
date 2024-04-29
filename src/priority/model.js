import {pool} from "../db/conection.js";

class PriorityModel {
    constructor(table = "priority") {
        this.table = table;
    }

    async getAllPriority() {
        const query = `SELECT * FROM ${tis.table}`
        const result = await pool.query(query);
        return result[0];
    }

    /**
     * @param {int} idPriority Id of the priority
     */
    async getPriorityByID(idPriority) {
        const query = `SELECT * FROM ${this.table} where id_${this.table} = ${idPriority}`
        const result = await pool.query(query);
        return result[0];
    }
}