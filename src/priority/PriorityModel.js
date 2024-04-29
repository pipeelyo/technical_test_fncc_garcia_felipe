import {connection} from "../db/connection.js";
import {DataTypes} from "sequelize";

const priorities = [
    {
        name: 'Urgente',
        description: 'Las tareas urgentes son aquellas que requieren atención inmediata e inaplazable. Suelen estar asociadas a un problema crítico que debe solucionarse lo antes posible para evitar consecuencias negativas o cumplir con un plazo límite inminente.'
    }, {
        name: 'Normal',
        description: 'Las tareas normales son aquellas que son importantes y deben completarse en un tiempo determinado, pero no son tan críticas como las urgentes. Implican actividades que contribuyen al logro de objetivos a mediano plazo y requieren atención regular.'
    }, {
        name: 'Bajo',
        description: 'Las tareas de baja prioridad son aquellas que son menos importantes y no tienen un impacto significativo en el proyecto o trabajo. Pueden posponerse sin afectar el resultado general y, a menudo, se realizan cuando se dispone de tiempo libre.'
    }
];

export const Priority = connection.define('priority', {
    id_priority: {
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
    tableName: 'priority'
});

export function initializePriority() {
    for (const priority of priorities) {
        Priority.create(priority).then(
            Priority => {
                console.log('Priority created:', Priority);
            }).catch(error => {
            console.error('Error creating Priority:', error);
        });
    }
}
