import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

export const Event = sequelize.define(
    'Event',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        startTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        endTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        isPublic: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        // Sequelize does this automatically, but manually adding it for future reference...
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            },
            onDelete: 'CASCADE',
        }
    }

);