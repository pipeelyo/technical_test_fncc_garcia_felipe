import {connection} from "../db/connection.js";
import {DataTypes} from "sequelize";

const subTasks = [
    {
        id_mayor_task: 1,
        id_minor_task: 6
    }, {
        id_mayor_task: 2,
        id_minor_task: 7
    }, {
        id_mayor_task: 6,
        id_minor_task: 8
    }
];

const SubTask = connection.define('sub_task', {
    id_sub_task: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_mayor_task: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_minor_task: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'sub_task'
});

export function initializeSubTask() {
    for (const subTask of subTasks) {
        SubTask.create(subTask).then(
            SubTask => {
                console.log('Sub-Tasks created:', SubTask);
            }).catch(error => {
            console.error('Error creating Sub-Tasks:', error);
        });
    }
}
