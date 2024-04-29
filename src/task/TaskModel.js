import {connection} from "../db/connection.js";
import {DataTypes} from "sequelize";

const tasks = [
    {
        name: 'Task #1',
        description: 'T#1 - Lorem ipsum dolor sit amet',
        begin_date: '2024-04-30',
        end_date: '2024-05-1',
        duration: 1440,
        id_priority: 1,
        id_status: 3
    }, {
        name: 'Task #2',
        description: 'T#2 - Lorem ipsum dolor sit amet',
        begin_date: '2024-04-30',
        end_date: '2024-05-1',
        duration: 1440,
        id_priority: 2,
        id_status: 2
    }, {
        name: 'Task #3',
        description: 'T#3 - Lorem ipsum dolor sit amet',
        begin_date: '2024-04-30',
        end_date: '2024-05-1',
        duration: 1440,
        id_priority: 3,
        id_status: 1
    }, {
        name: 'Task #4',
        description: 'T#4 - Lorem ipsum dolor sit amet',
        begin_date: '2024-04-30',
        end_date: '2024-05-1',
        duration: 1440,
        id_priority: 2,
        id_status: 2
    }, {
        name: 'Task #5',
        description: 'T#5 - Lorem ipsum dolor sit amet',
        begin_date: '2024-04-30',
        end_date: '2024-05-1',
        duration: 1440,
        id_priority: 1,
        id_status: 3
    }, {
        name: 'Task #6',
        description: 'T#6 - Lorem ipsum dolor sit amet',
        begin_date: '2024-04-30',
        end_date: '2024-05-1',
        duration: 1440,
        id_priority: 2,
        id_status: 2
    }, {
        name: 'Task #7',
        description: 'T#7 - Lorem ipsum dolor sit amet',
        begin_date: '2024-04-30',
        end_date: '2024-05-1',
        duration: 1440,
        id_priority: 3,
        id_status: 1
    }, {
        name: 'Task #8',
        description: 'T#8 - Lorem ipsum dolor sit amet',
        begin_date: '2024-04-30',
        end_date: '2024-05-1',
        duration: 1440,
        id_priority: 2,
        id_status: 2
    }
];

export const Task = connection.define('task', {
    id_task: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    begin_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'task'
});

export function initializeTask() {
    for (const task of tasks) {
        Task.create(task).then(
            Task => {
                console.log('Tasks created:', Task);
            }).catch(error => {
            console.error('Error creating Tasks:', error);
        });
    }
}
