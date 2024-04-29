import {connection} from "../db/connection.js";
import {DataTypes} from "sequelize";

const states = [
    {
        name: 'Iniciada',
        description: 'Una tarea iniciada significa que se ha dado el primer paso para completarla. Se ha asignado a un responsable, se han definido los objetivos y se ha comenzado a trabajar en ella.'
    }, {
        name: 'En proceso',
        description: 'Una tarea en proceso significa que se está trabajando activamente en ella. El responsable está dedicando tiempo y esfuerzo para completarla y se están produciendo avances tangibles.'
    }, {
        name: 'Terminada',
        description: 'Una tarea terminada significa que se ha completado en su totalidad. Se han cumplido todos los objetivos, se han entregado los resultados esperados y no queda ningún trabajo pendiente.'
    }
];

export const Status = connection.define('status', {
    id_status: {
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
    }
}, {
    tableName: "status"
});

export function initializeStatus() {
    for (const status of states) {
        Status.create(status).then(
            Status => {
                console.log('Status created:', Status); // Access all user data
            }).catch(error => {
            console.error('Error creating status:', error);
        });
    }
}
