import { Category, Event, User, Item, Post } from "../models/models.js";


// User ↔ Event
User.hasMany(Event, {
  foreignKey: "userID",
  onDelete: "CASCADE",
});
Event.belongsTo(User, {
  foreignKey: "userID",
});

// Item ↔ Category
Item.belongsTo(Category, {
  foreignKey: "categoryID",
  onDelete: "CASCADE",
});
Category.hasMany(Item, {
  foreignKey: "categoryID",
});

// Item ↔ Event
Event.hasMany(Item, {
  foreignKey: "eventID",
  onDelete: "CASCADE",
});
Item.belongsTo(Event, {
  foreignKey: "eventID",
});

// Item ↔ User
User.hasMany(Item, {
  foreignKey: "userID",
  onDelete: "CASCADE",
});
Item.belongsTo(User, {
  foreignKey: "userID",
});

// Post ↔ User
User.hasMany(Post, {
  foreignKey: "userID",
  onDelete: "CASCADE",
});
Post.belongsTo(User, {
  foreignKey: "userID",
});

// Post ↔ Event
Event.hasMany(Post, {
  foreignKey: "eventID",
  onDelete: "CASCADE",
});
Post.belongsTo(Event, {
  foreignKey: "eventID",
});
