import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

export const User = sequelize.define(
    'User',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: "Email address already exists."
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }

);