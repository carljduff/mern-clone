import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

export const User = sequelize.define("User", {
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
      msg: "Email address already exists.",
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export const Event = sequelize.define("Event", {
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
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
//   userID: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: "Users",
//       key: "id",
//     },
//   },
});



export const Category = sequelize.define("Category", {
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export const Item = sequelize.define("Item", {
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isNeeded: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  
  
});
export const Post = sequelize.define("Post", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATE,
  },
});
