import {pool} from "../db/conection.js";

class StatusModel {
    constructor(table = "status") {
        this.table = table;
    }

    async getAllStatus() {
        const query = `SELECT * FROM ${this.table}`
        const result = await pool.query(query);
        return result[0];
    }

    /**
     * @param {int} idStatus Id of the status
     */
    async getStatusByID(idStatus) {
        const query = `SELECT * FROM ${this.table} where id_${this.table} = ${idStatus}`
        const result = await pool.query(query);
        return result[0];
    }
}